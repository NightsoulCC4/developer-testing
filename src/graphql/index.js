const { ApolloServer } = require("apollo-server");
const { log } = require("console");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const main = () => {
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
