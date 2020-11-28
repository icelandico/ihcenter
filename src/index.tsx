import React from "react"
import ReactDOM from "react-dom"
import "./styles/base.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import App from "./views/App"
import * as serviceWorker from "./serviceWorker"
import { rootStore } from "./store/RootStore"

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
