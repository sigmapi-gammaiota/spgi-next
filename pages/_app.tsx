import '../styles/globals.css'
import PublicLayout from '../components/layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  if(pageProps.secure){
    return(
        <Component {...pageProps} />
    )
  }
  else{
    return (
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    )
  }

}

export default MyApp
