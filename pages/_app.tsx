import PrivateLayout from "@components/PrivateLayout";
import PublicLayout from "@components/PublicLayout";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  if (pageProps.private) {
    if (pageProps.navLinks && pageProps.messages) {
      return (
        <div>
          <Head>
            <title>
              Sigma Pi Gamma Iota
              {pageProps.title && " - ".concat(pageProps.title)}
            </title>
          </Head>
          <SessionProvider session={session}>
            <PrivateLayout
              navLinks={pageProps.navLinks}
              messages={pageProps.messages}
            >
              <Component {...pageProps} />
            </PrivateLayout>
          </SessionProvider>
        </div>
      );
    }
  } else {
    return (
      <div>
        <Head>
          <title>
            Sigma Pi Gamma Iota
            {pageProps.title && " - ".concat(pageProps.title)}
          </title>
        </Head>
        <SessionProvider session={session}>
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
        </SessionProvider>
      </div>
    );
  }
}

export default MyApp;
