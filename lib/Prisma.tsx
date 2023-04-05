import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient; // Must be a `var` and not a `let' or 'const'
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
