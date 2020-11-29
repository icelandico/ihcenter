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
  NaviLink,
  SearchIconSvg,
  NavbarLogo,
  NavbarSearch,
  NavbarElement
} from "./navbar-styles"
import { menuItems } from "../../routing/routeConfig"

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
        <NavbarLogo />
        <NavbarSearch>
          <SearchIconSvg />
          <SearchInput type="text" placeholder="Search" />
        </NavbarSearch>
        <NavbarElement>
          <NavigationLinks>{generateLinks()}</NavigationLinks>
        </NavbarElement>
      </NavbarBottom>
    </NavbarContainer>
  )
}

export default inject("store")(observer(Navbar))
