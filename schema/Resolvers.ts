
import { prisma } from '../prisma'

export const resolvers = {
  Query: {
    users: async () => {
    return await prisma.user.findMany();
  }
  },
};
