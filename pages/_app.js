import '../styles/globals.css'
import '../styles/landing.css'
import 'bulma'
import EzPix from '../components/EzPix'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="ezpix"></div>
    </>
  )
}

export default MyApp
