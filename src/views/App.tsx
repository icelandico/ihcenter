import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import Routes from "../routing/Routes"
import Navbar from "../components/Navbar/navbar"
import DetailPanel from "../components/DetailPanel"
import Timeline from "../components/Timeline"
import UserBookmarks from "../components/UserBookmarks"
import Filters from "../components/Filters/filters"

const App: React.FC = () => {
  return (
    <div className="main-container">
      <div className="left">
        <div className="top-menu navbar">
          <Navbar />
        </div>
        <div className="left-gradient" />
        <div className="main-content-container">
          <div className="content-menu">
            <span className="content__menu-aside-text content__menu-aside-filters">
              Additional Filters
            </span>
            <Filters />
          </div>
          <div className="content-box">
            <Routes />
          </div>
        </div>
        <Route exact path="/">
          <Timeline />
        </Route>
      </div>

      <div className="right">
        <div className="top-menu" />
        <div className="content-container-r">
          <DetailPanel />
          <UserBookmarks />
        </div>
      </div>
    </div>
  )
}

export default App
