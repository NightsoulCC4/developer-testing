const { ApolloServer, gql } = require("apollo-server");

const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const typeDefs = gql`
  type real_estate {
    id_real_estate: Int
    name: String
    area: String
    bed_count: Int
    price: Double
  }

  type Query {
    real_estates: [real_estate]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const main = async () => {
  const mysql = require("mysql2/promise");
  const con = await mysql.createConnection({ host: 'localhost', user: 'root', password: '1234', database: 'fazwaz' });
  const [row, field] = await con.execute(`SELECT * FROM fazwaz.real_estate;`);

  console.log(row);

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}






