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

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //use redirect to interrupt flow for signin?
      if (email && user.email) {
        //magic email login, check admin list first
        if (process.env.ADMIN_EMAILS?.includes(user.email)) {
          //todo: validate this is a secure paradigm
          return true; //admin email login
        }
        //not admin, check user object from prisma adapter
        if (user.isValid) {
          //we SHOULD be working with a non-prototype user from prisma adapter
          //todo: validate non-prototype
          //this means we continue with login since it was a successful auth from db source
          return true;
        } else {
          //user object doesn't have isValid prop
          //assume is a prototype meaning new user
          //check user from db manually
          let dbUserEmail = await prisma.user.findFirst({
            where: { email: user.email },
            select: { email: true },
          });
          if (dbUserEmail) {
            //user email in db, we allow login (ignore email.isVerificationRequest, could be first signin)
            return true;
          } else return "/"; //user not in DB, not admin, deny signin and redirect to homepage
        }
      } else if (profile) {
        //todo: how slack login?
      }
      return false;
    },
  },
});
