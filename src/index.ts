import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const {resolvers} = require('./schema/Resolvers');
const {typeDefs} = require('./schema/TypeDefs');
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
