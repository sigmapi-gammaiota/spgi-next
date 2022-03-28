import "../styles/globals.css";
import PublicLayout from "../components/PublicLayout";
import type { AppProps } from "next/app";
import PrivateLayout from "../components/PrivateLayout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  if (pageProps.private) {
    if (pageProps.navLinks && pageProps.messages) {
      return (
        <SessionProvider session={session}>
          <PrivateLayout
            navLinks={pageProps.navLinks}
            messages={pageProps.messages}
          >
            <Component {...pageProps} />
          </PrivateLayout>
        </SessionProvider>
      );
    }
  } else {
    return (
      <SessionProvider session={session}>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </SessionProvider>
    );
  }
}

export default MyApp;
