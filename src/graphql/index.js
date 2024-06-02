const { ApolloServer, gql } = require("apollo-server");
const generateFakeData = require("./generateFakeData");
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
    images: [image_gallery]
  }

  type Query {
    real_estates: [real_estate]
  }
`;

const main = async () => {
  let data;
  const con = await mysql.createConnection(config);

  const [rows] = await con.execute(`SELECT * FROM fazwaz.real_estate;`);

  if (rows.length === 0) {
    data = generateFakeData(5);

    data.forEach(async (el) => {
      const image = el.imageUrl;

      try {
        const [rows] = await con.execute(
          `INSERT INTO fazwaz.real_estate
          (project_name,
          area,
          bed_count,
          price,
          short_description)
          VALUES
          (?, ?, ?, ?, ?);`,
          [
            el.project_name,
            el.area,
            el.bed_count,
            el.price,
            el.short_description,
          ]
        );

        image.forEach(async (imageUrl) => {
          try {
            await con.execute(
              `INSERT INTO fazwaz.image_gallery
              (
                imageUrl,
                id_real_estate
              )
              VALUES
              (?, ?);
              `,
              [imageUrl, rows.insertId]
            );
          } catch (e) {
            log(e);
            return e;
          }
        });

        log("generated data success!!");
      } catch (e) {
        log(e);
        return e;
      }
    });
  }

  const resolvers = {
    Query: {
      real_estates: async () => {
        try {
          var rows;
          const [result] = await con.execute(
            `SELECT * FROM fazwaz.real_estate;`
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
                log(el)


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
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
