const { ApolloServer, gql } = require("apollo-server");
const generateFakeData = require("./generateFakeData");
const mysql = require("mysql2/promise");
const { log } = require("console");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const config = require("./config");

const typeDefs = gql`
  type real_estate {
    id_real_estate: Int
    name: String
    area: String
    bed_count: Int
    price: Float
    imageUrl: String
  }

  type Query {
    real_estates: [real_estate]
    init_data: [real_estate]
  }
`;

const main = async () => {
  let data;
  const con = await mysql.createConnection(config);

  const [rows, fields] = await con.execute(
    `SELECT * FROM fazwaz.real_estate;`
  );

  if (rows.length === 0) {
    data = generateFakeData(5);

    data.forEach(async (el) => {
      await con.execute(
        `INSERT INTO fazwaz.real_estate (name, area, bed_count, price, imgeUrl) VALUES (?, ?, ?, ?, ?);`,
        [el.name, el.area, el.bed_count, el.price, el.imageUrl]);

      log("generated data success!!");
    });
  }


  const resolvers = {
    Query: {
      /* init_data: async () => {
        
      }, */
      real_estates: async () => {
        const [rows, fields] = await con.execute(`SELECT * FROM fazwaz.real_estate;`);

        return rows;
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
