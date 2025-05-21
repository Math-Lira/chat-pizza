import { PrismaClient } from '@prisma/client';

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV !== 'production' && globalThis.prismaGlobal) {
  prisma = globalThis.prismaGlobal;
} else {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalThis.prismaGlobal = prisma;
  }
}

export default prisma;