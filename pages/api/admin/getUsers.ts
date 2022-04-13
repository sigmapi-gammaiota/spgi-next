import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (session) {
    let allUsers = await prisma.user.findMany();
    res.status(200).json(allUsers);
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end()
}
