import '../styles/globals.css'
import { ContextProvider } from '../utils/ContextProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ContextProvider>
    

  )
}

export default MyApp
