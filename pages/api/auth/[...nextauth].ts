import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import SlackProvider from "next-auth/providers/slack";
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient();
export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    SlackProvider({
      //@ts-ignore
      clientId: process.env.SLACK_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     //TODO: check if email prop is true so we know if we're using email provider
  //     //check if email in signin request
  //     if (user.email) {
  //       //grab user's email from prisma db
  //       let dbUserEmail = await prisma.user.findFirst({
  //         where: { email: user.email },
  //         select: { email: true },
  //       });

  //       // TODO: validate email sign in works only for users in db or admin emails
  //       // TODO: add system to add users not in admin_emails
  //       if (dbUserEmail) {
  //         return true; //user exists in db, they can log in
  //       } else {
  //         if (process.env.ADMIN_EMAILS?.includes(user.email)) {
  //           return true; //admin email login
  //         } else {
  //           return false; //invalid login, not admin or user in  db
  //         }

  //         // check if using an admin email
  //       }
  //     } else return false; //need email field for login
  //   },
  // },
});
