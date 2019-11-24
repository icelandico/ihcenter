import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import Routes from "../routing/Routes"
import Navbar from "../components/Navbar/navbar"

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
          <div className="content-main">
            <div className="content-list-info" />
            <div className="content-main-info" />
          </div>
          <div className="content-lower" />
        </div>
      </div>
    </div>
  )
}

export default App
