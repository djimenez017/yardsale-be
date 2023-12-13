import { prisma } from '../prisma.js';
export const resolvers = {
    Query: {
        users: async () => {
            return await prisma.user.findMany();
        }
    },
};
