import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import { MessageProps } from "../components/Message";

interface PrivateProps {
  private: boolean;
  navLinks: [({ href: string; text: string } | undefined)?];
  messages: [MessageProps?];
  session: Session | null;
}

interface PublicProps {
  private: boolean;
}

/**
 * Gets default props structure with session validation, init for role-based navbar, and init for status messaging
 * @param ctx passthrough of getServerSideProps context. used by getSession() to determine if private routing is allowed
 * @returns PrivateProps object where private==true when getSession() returns a not-null session. Redirect if private==false. Includes empty navLinks and Messages arrays for other libraries to fill from context
 */
export async function getDefaultPrivateProps(
  ctx: GetSessionParams | undefined
): Promise<PrivateProps> {
  let session = await getSession(ctx); //grab session for SessionProvider
  let priv = session ? true : false; //private determined by session
  let props: PrivateProps = {
    private: priv,
    navLinks: [],
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
