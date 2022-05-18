import '../styles/globals.css'
import Global from '../theme/Global'

function MyApp({ Component, pageProps }) {
  return( <> 
    <Global/>
    <Component {...pageProps} /> 
    </> )
}

export default MyApp
