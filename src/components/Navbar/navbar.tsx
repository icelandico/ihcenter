import * as React from "react"
import { observer, inject } from "mobx-react"
import {
  NavbarContainer,
  NavbarTop,
  NavbarBottom,
  NavigationLinks,
  NavigationItem,
  NavigationIcon,
  SearchInput,
  PageTitle,
  NaviLink,
  SearchIconSvg
} from "./navbar-styles"
import { menuItems } from "../../routing/routeConfig"
import Loader from "../shared/Loader/loader";

const Navbar: React.FC = () => {
  const generateLinks = () => {
    return menuItems.map((item, index) => {
      return (
        <NavigationItem key={`nav-${index + 1}`}>
          <NaviLink to={`${item.route}`} exact>
            <NavigationIcon
              src={require(`./../../static/icons/MODE_${item.name}.svg`)}
            />
            <p>{item.name}</p>
          </NaviLink>
        </NavigationItem>
      )
    })
  }

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
          {/* <PageTitle>view</PageTitle> */}
          <NavigationLinks>{generateLinks()}</NavigationLinks>
        </div>
      </NavbarBottom>
    </NavbarContainer>
  )
}

export default inject("store")(observer(Navbar))
