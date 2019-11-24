import * as React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import {
  NavbarContainer,
  NavbarTop,
  NavbarBottom,
  NavigationLinks,
  SearchInput,
  PageTitle
} from "./navbar-styles"
import { ReactComponent as SearchIcon } from "../../static/icons/SEARCH.svg"

const SearchIconSvg = styled(SearchIcon)`
  position: absolute;
  left: -30px;
  height: 30%;
`

const Navbar = () => {
  return (
    <NavbarContainer className="main-navbar">
      <NavbarTop />
      <NavbarBottom>
        <PageTitle>Idea Heritage Center</PageTitle>
        <div className="nav-item navbar-search">
          <SearchIconSvg />
          <SearchInput type="text" placeholder="Search" />
        </div>
        <div className="nav-item navigation-links">
          <NavigationLinks>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/diagram">Diagram</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
          </NavigationLinks>
        </div>
      </NavbarBottom>
    </NavbarContainer>
  )
}

export default Navbar
