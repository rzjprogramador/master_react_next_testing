import { AppProps } from 'next/app'
import '@src/styles/global/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
