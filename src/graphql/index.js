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
    log(`🚀  Server ready at ${url}`);
  });
};

main();
