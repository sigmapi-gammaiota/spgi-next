import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getUserRoles } from "../../../lib/RoleRouter";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "PUT") {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const session = await getSession({ req }); //for validating authentication
  if (session) {
    //data for update query
    let userEmail = req.body.email as string;
    let userName = req.body.name as string;
    let userImage = req.body.image as string;

    if (
      session.user?.email == userEmail ||
      (await getUserRoles(prisma, session?.user?.email!!)).includes("ADMIN")
    ) {
      //this conditional is true when session user is editing itself or is admin permission (can edit other accounts)

      prisma.user.update({
        select: { email: true, name: true, image: true },
        where: { email: userEmail },
        data: { email: userEmail, name: userName, image: userImage },
      });
      res.status(200).json({});
    } else {
      res.status(403).end("Unauthorized"); //user is logged in, but we do not give access
    }
  } else {
    res.status(404).end(); //no session, do not reveal route
  }
}
