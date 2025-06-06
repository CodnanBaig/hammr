import { PrismaClient } from "@prisma/client"

const globalForPrisma = global

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
  errorFormat: 'pretty',
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma;

