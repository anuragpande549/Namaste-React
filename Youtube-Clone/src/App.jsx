import Body from "./component/Body"
import Head from "./component/Head"
import {Provider} from "react-redux"
import Store from "./utils/Store" 

function App() {

  return (
    <>
    <Provider store={Store}>
    <Head/>
    <Body/>
    </Provider>
    </>
  )
}

export default App
 