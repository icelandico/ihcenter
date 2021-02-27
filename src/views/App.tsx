import React from "react"
import "./App.css"
import { Route } from "react-router-dom"
import Routes from "../routing/Routes"
import Navbar from "../components/Navbar/navbar"
import DetailPanel from "../components/DetailPanel"
import Timeline from "../components/Timeline"
import UserBookmarks from "../components/UserBookmarks"
import Filters from "../components/Filters/filters"
import ActiveFilters from "../components/Filters/ActiveFilters/active-filters"
import {
  MainContainer,
  MainContainerLeft,
  MainContainerTopMenu,
  MainContainerLeftGradient
} from "./app-styles"

const App: React.FC = () => {
  return (
    <MainContainer>
      <MainContainerLeft>
        <MainContainerTopMenu>
          <Navbar />
        </MainContainerTopMenu>
        <MainContainerLeftGradient />
        <div className="main-content-container">
          <ActiveFilters />
          <div className="content-menu">
            {/*<span className="content__menu-aside-text content__menu-aside-filters">*/}
            {/*  Additional Filters*/}
            {/*</span>*/}
            <Filters />
          </div>
          <div className="content-box">
            <Routes />
          </div>
        </div>
        <Route exact path="/">
          <Timeline />
        </Route>
      </MainContainerLeft>

      <div className="right">
        <div className="top-menu" />
        <div className="content-container-r">
          <DetailPanel />
          <UserBookmarks />
        </div>
      </div>
    </MainContainer>
  )
}

export default App
