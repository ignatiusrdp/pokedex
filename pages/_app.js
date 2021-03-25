import '../styles/globals.css'
import { ContextProvider } from '../utils/ContextProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    

  )
}

export default MyApp
