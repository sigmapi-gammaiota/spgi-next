import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getUserRoles } from "../../../../lib/RoleRouter";
import { getAllUsers } from "../../../../lib/UserTools";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = await getSession({ req }); //for validating authentication
  if (session) {
    if (
      (await getUserRoles(prisma, session?.user?.email!!)).includes("ADMIN")
    ) {
      let users = await getAllUsers();
      res.status(200).json(users);
    } else {
      res.status(403).end("Unauthorized"); //user is logged in, but does not have permission
    }
  } else {
    res.status(404).end(); //no session, do not reveal route
  }
}
