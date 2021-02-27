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
  MainContainerLeftGradient,
  MainContainerContent,
  MainContainerMenu,
  MainContainerInnerContent,
  MainContainerRight,
  MainContainerRightBox
} from "./app-styles"

const App: React.FC = () => {
  return (
    <MainContainer>
      <MainContainerLeft>
        <MainContainerTopMenu>
          <Navbar />
        </MainContainerTopMenu>
        <MainContainerLeftGradient />
        <MainContainerContent>
          <ActiveFilters />
          <MainContainerMenu>
            {/*<span className="content__menu-aside-text content__menu-aside-filters">*/}
            {/*  Additional Filters*/}
            {/*</span>*/}
            <Filters />
          </MainContainerMenu>
          <MainContainerInnerContent>
            <Routes />
          </MainContainerInnerContent>
        </MainContainerContent>
        <Route exact path="/">
          <Timeline />
        </Route>
      </MainContainerLeft>

      <MainContainerRight>
        <MainContainerTopMenu />
        <MainContainerRightBox>
          <DetailPanel />
          <UserBookmarks />
        </MainContainerRightBox>
      </MainContainerRight>
    </MainContainer>
  )
}

export default App
