import '../styles/globals.css'
import '../styles/breeze.css'
export default function App({Component, pageProps}){
    return <Component {... pageProps}/>
}