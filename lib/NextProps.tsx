import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { AllPrivateLinks, Roles, getUserRoles } from "./RoleRouter";

const prisma = new PrismaClient();
export interface PrivateProps {
  private: boolean; //true if session found, false should redirect to public or login page
  title: String; //to be set by caller of getPrivateProps
  navLinks: { text: String; href: String }[]; //serializeable private link structure, unique to user found via session ctx or empty if no session
  userRoles: Roles[]; // roles for the current session's user
  session: Session | null; //session from context for conditional rendering
}

export interface PublicProps {
  private: boolean;
  title: String;
}

/**
 * Gets props for role-based navbar, validating user session and role based routing
 * @param ctx passthrough of getServerSideProps context. used by getSession() for authentication/authorization
 * @returns PrivateProps object where private==true when getSession() returns a not-null session and user is allowed to access page. Redirect when private==false.
 */
export async function getPrivateProps(
  ctx: GetSessionParams | undefined
): Promise<PrivateProps> {
  let session = await getSession(ctx);

  if (session) {
    let userEmail: string = session?.user?.email!!; //session should have user account, which should have email
    let userRoles: Roles[] = await getUserRoles(prisma, userEmail); //get user roles via email query

    console.log(ctx?.req?.url);

    let userNavLinks: { text: String; href: String }[] = []; //list of valid links for a given user
    AllPrivateLinks.map((privateLink) => {
      //for each link in all private links

      if (privateLink.roles.includes("ALL")) {
        userNavLinks.push({ text: privateLink.text, href: privateLink.href }); //add link if available to all
        return; //early return from mapping function, move on
      }

      //if link not available to all users
      userRoles.map((userRole) => {
        //check each user role
        if (
          privateLink.roles.some((allowedRoles) => {
            //check if link allows user role
            //if this returns true, user is allowed to use this link since their roles match
            return userRole == allowedRoles;
          })
        ) {
          //add current private link to userLinks if true
          userNavLinks.push({ text: privateLink.text, href: privateLink.href });
        }
      });
    });

    //check if current URL is in list of valid links that user can visit
    // if (
    //   userNavLinks.some((link) => {
    //     return link.href == ctx?.req?.url;
    //   })
    // ) {
      //if one link in the list has the same url as current url, we allow access by returning private props
      return {
        private: true,
        title: "",
        navLinks: userNavLinks,
        userRoles: userRoles,
        session: session,
      };
    // }
  }

  //condition occurs when visitor is not allowed to view this page
  return {
    private: false,
    title: "",
    navLinks: [],
    userRoles: [],
    session: null,
  };
}

export function getDefaultPublicProps(): PublicProps {
  let props: PublicProps = {
    private: false,
    title: "",
  };
  return props;
}
