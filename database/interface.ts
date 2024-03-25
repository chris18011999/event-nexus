import { PrismaClient } from '@prisma/client';

declare global {
    var prismaInterface: PrismaClient
}

let prismaInterface: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaInterface = new PrismaClient({
    log: ['query']
  });
} else {
  if (!global.prismaInterface) {
    global.prismaInterface = new PrismaClient({
      log: ['query']
    });
  }
  prismaInterface = global.prismaInterface;
}

export default prismaInterface;