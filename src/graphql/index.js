const { ApolloServer, gql } = require("apollo-server");
const mysql = require("mysql2/promise");
const { log } = require("console");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const config = require("./config");

const typeDefs = gql`
  type image_gallery {
    id_image_gallery: Int
    imageUrl: String
    id_real_estate: Int
  }

  type real_estate {
    id_real_estate: Int
    project_name: String
    area: String
    bed_count: Int
    price: Float
    short_description: String
    type: String
    images: [image_gallery]
  }

  type Query {
    real_estates: [real_estate]
    search_real_estates(
      type: String
      min_price: Int
      max_price: Int
      bed_count: Int
      area: String
    ): [real_estate]
  }
`;

const main = async () => {
  const con = await mysql.createConnection(config);

  const resolvers = {
    Query: {
      real_estates: async () => {
        try {
          var rows;
          const [result] = await con.execute(
            `SELECT *
            FROM fazwaz.real_estate
            WHERE fazwaz.real_estate.final_payment = 0;`
          );

          if (result.length > 0) {
            rows = result;

            rows = rows.map(async (el) => {

              try {
                const [images] = await con.execute(
                  `SELECT * FROM fazwaz.image_gallery WHERE fazwaz.image_gallery.id_real_estate = ?;`,
                  [el.id_real_estate]
                );

                if (images.length > 0) {
                  el = {
                    ...el,
                    images,
                  };
                }

                return el;
              } catch (e) {
                log(e);
              }
            });

            return rows;
          }
        } catch (e) {
          log(e);
        }
      },
      search_real_estates: async (_, args) => {
        const { type, min_price, max_price, bed_count, area } = args;

        let array = [];

        let query = `SELECT * FROM fazwaz.real_estate WHERE fazwaz.real_estate.final_payment = 0 `;

        if (type != null) {
          query += `AND fazwaz.real_estate.type = ? `;
          array.push(type);
        }

        if (min_price != 0 && max_price != 0) {
          query += `AND fazwaz.real_estate.price BETWEEN ? AND ? `;
          array.push(min_price);
          array.push(max_price);
        }
        else if (min_price === 0 && max_price != 0) {
          query += `AND fazwaz.real_estate.price <= ? `;
          array.push(max_price);
        }
        else if (min_price != 0 && max_price === 0) {
          query += `AND fazwaz.real_estate.price >= ? `;
          array.push(min_price);
        }

        if (bed_count != null) {
          if (bed_count === 4) {
            query += `AND fazwaz.real_estate.bed_count >= 4 `;
          }
          else if (bed_count !== 4) {
            query += `AND fazwaz.real_estate.bed_count = ? `;
            array.push(bed_count);
          }
        }

        if (area != null) {
          query += `AND fazwaz.real_estate.area LIKE ? `;
          array.push(`%${area}%`);
        }

        query += `;`;

        log(query);
        log("------------------------------------------------------------------------")
        log(array);

        try {
          let rows;
          const [result, field, error] = await con.execute(query, array);

          if (result.length > 0) {
            rows = result;

            rows = rows.map(async (el) => {

              try {
                const [images] = await con.execute(
                  `SELECT * FROM fazwaz.image_gallery WHERE fazwaz.image_gallery.id_real_estate = ?;`,
                  [el.id_real_estate]
                );

                if (images.length > 0) {
                  el = {
                    ...el,
                    images,
                  };
                }

                return el;
              } catch (e) {
                log(e);
              }
            });

            return rows;

          };
        } catch (e) {
          log(e);
        };

      },
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen().then(({ url }) => {
    log(`🚀  Server ready at ${url}`);
  });
};

main();
