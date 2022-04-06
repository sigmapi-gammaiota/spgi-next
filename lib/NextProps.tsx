import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import { MessageProps } from "../components/Message";
import { PrismaClient } from "@prisma/client";
import { PrivateLink, AllPrivateLinks, Roles } from "./RoleRouter";

const prisma = new PrismaClient();
interface PrivateProps {
  private: boolean;
  navLinks: PrivateLink[];
  messages: [MessageProps?];
  session: Session | null;
}

interface PublicProps {
  private: boolean;
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
  let userLinks: PrivateLink[] = [];
  if (priv && session) {
    let userRoles = await prisma.user.findFirst({
      where: { email: session.user?.email!! },
      select: { roles: true },
    });
    userRoles?.roles.map((userRole) => {
      //for each user role
      AllPrivateLinks.map((privateLink) => {
        //for each link in all private links
        if (
          privateLink.roles.includes("ALL") ||
          privateLink.roles.some((allowedRoles) => {
            //first, check if link should be available to all users by default

            //otherwise check for each allowed role on that link
            //return true when userRole is in list of allowed roles in a given private link
            return userRole == allowedRoles;
          })
        ) {
          //add link to userLinks on true
          userLinks.push(privateLink);
        }
      });
    });
  }

  let props: PrivateProps = {
    private: priv,
    navLinks: userLinks,
    messages: [],
    session: session,
  };
  return props;
}

export function getDefaultPublicProps(): PublicProps {
  let props: PublicProps = {
    private: false,
  };
  return props;
}
