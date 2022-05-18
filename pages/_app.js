import './../styles/globals.css'
import Global from './../Theme/Global'

function MyApp({ Component, pageProps }) {
  return( <> 
    <Global/>
    <Component {...pageProps} /> 
    </> )
}

export default MyApp
