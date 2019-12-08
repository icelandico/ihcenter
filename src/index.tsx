import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import App from "./views/App"
import * as serviceWorker from "./serviceWorker"
// import { createStore } from "../stores/createStore"
// import { StoreProvider } from "./store/StoreProvider"
import CharacterStore from "./store/models/character"

// const store = CharacterStore.create({})

ReactDOM.render(
  <Provider store={CharacterStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
