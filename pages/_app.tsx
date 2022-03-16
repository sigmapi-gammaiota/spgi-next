import '../styles/globals.css'
import PublicLayout from '../components/PublicLayout'
import type { AppProps } from 'next/app'
import PrivateLayout from '../components/PrivateLayout'

function MyApp({ Component, pageProps }: AppProps) {

  if (pageProps.private) {
    if (pageProps.navLinks && pageProps.messages) {
      return (
        <PrivateLayout navLinks={pageProps.navLinks} messages={pageProps.messages}>
          <Component {...pageProps} />
        </PrivateLayout>
      )
    }
  }
  else {
    return (
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    )
  }

}

export default MyApp
