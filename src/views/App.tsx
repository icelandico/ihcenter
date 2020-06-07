import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import Routes from "../routing/Routes"
import Navbar from "../components/Navbar/navbar"
import DetailPanel from "../components/DetailPanel"
import Loader from "../components/shared/Loader/loader";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <div className="left">
        <div className="top-menu navbar">
          <Navbar />
        </div>
        <div className="left-gradient" />
        <div className="main-content-container">
          <div className="content-menu" />
          <div className="content-box">
            <Routes />
          </div>
        </div>
        <Route exact path="/">
          <div className="map-timeline" />
        </Route>
      </div>

      <div className="right">
        <div className="top-menu" />
        <div className="content-container-r">
          <DetailPanel />
          <div className="content-lower"><Loader/></div>
        </div>
      </div>
    </div>
  )
}

export default App
