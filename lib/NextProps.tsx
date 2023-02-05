import { MessageProps } from "@components/Message";
import { PrismaClient } from "@prisma/client";
import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import { AllPrivateLinks } from "./RoleRouter";

const prisma = new PrismaClient();
export interface PrivateProps {
  private: boolean;
  title: String;
  navLinks: { text: String; href: String }[]; //instead of passing PrivateLink we need to use json to be serializeable >:(
  messages: [MessageProps?];
  session: Session | null;
}

export interface PublicProps {
  private: boolean;
  title: String;
}

/**
 * Sets up props for role-based navbar, and init for in-page status messaging
 * @param ctx passthrough of getServerSideProps context. used by getSession() to determine if private routing is allowed
 * @returns PrivateProps object where private==true when getSession() returns a not-null session. Redirect if private==false. Includes empty navLinks and Messages arrays for other libraries to fill from context
 */
export async function getPrivateProps(
  ctx: GetSessionParams | undefined
): Promise<PrivateProps> {
  let session = await getSession(ctx); //grab session for SessionProvider
  let priv = session ? true : false; //private determined by session
  let userLinks: { text: String; href: String }[] = [];

  if (priv && session) {
    let userRoles = await prisma.user.findFirst({
      where: { email: session.user?.email!! },
      select: { roles: true },
    });

    AllPrivateLinks.map((privateLink) => {
      //for each link in all private links
      if (privateLink.roles.includes("ALL")) {
        userLinks.push({ text: privateLink.text, href: privateLink.href }); //add link if available to all
      }

      //if not available to all
      userRoles?.roles.map((userRole) => {
        //for each user role
        if (
          privateLink.roles.some((allowedRoles) => {
            //check for each allowed role on that link
            //return true when userRole is in list of allowed roles in a given private link
            return userRole == allowedRoles;
          })
        ) {
          //add link to userLinks on true
          userLinks.push({ text: privateLink.text, href: privateLink.href });
        }
      });
    });
  }

  let props: PrivateProps = {
    private: priv,
    title: "",
    navLinks: userLinks,
    messages: [],
    session: session,
  };
  return props;
}

export function getDefaultPublicProps(): PublicProps {
  let props: PublicProps = {
    private: false,
    title: "",
  };
  return props;
}
