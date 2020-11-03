import App from "next/app"
import "../styles/settings/global.scss"
import { Provider } from "react-redux"
import store from "../redux/store"

const MyApp = ({ Component, pageProps }) => {
      return ( 
            <Provider store={store}>
                  <Component {...pageProps} />
            </Provider>
      )
}

export default MyApp