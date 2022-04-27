import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User{
  email:string|null,
  name:string|null,
  image:string|null
}

export async function getAllUsers():Promise<User[]> {
  return prisma.user.findMany({
    select: { email: true, name: true, image: true },
  });
}
