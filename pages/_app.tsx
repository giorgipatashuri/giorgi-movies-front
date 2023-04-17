import MainProvider from '../src/providers/MainProvider'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  ) 
}

export default MyApp
