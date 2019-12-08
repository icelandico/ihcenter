import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { observer, inject } from "mobx-react"
import {
  NavbarContainer,
  NavbarTop,
  NavbarBottom,
  NavigationLinks,
  NavigationItem,
  NavigationIcon,
  SearchInput,
  PageTitle
} from "./navbar-styles"
import { ReactComponent as SearchIcon } from "../../static/icons/SEARCH.svg"

const SearchIconSvg = styled(SearchIcon)`
  position: absolute;
  left: -30px;
  height: 30%;
`
class Navbar extends React.Component<any, any> {
  menuItems: string[] = ["timeline", "diagram", "list", "compare", "map"]

  generateLinks = () => {
    return this.menuItems.map((item, index) => {
      return (
        <NavigationItem key={index}>
          <Link to={`/${item}`}>
            <NavigationIcon
              src={require(`./../../static/icons/MODE_${item}.svg`)}
              style={
                {
                  // backgroundImage: `url(http://franchise.carolsaundersswimschool.co.uk/wp-content/uploads/2017/02/img-placeholder.png)`,
                  // backgroundImage: `url('./../../static/icons/MODE_${item}.svg')`,
                }
              }
            />
            <p>{item}</p>
          </Link>
        </NavigationItem>
      )
    })
  }

  render() {
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
            <NavigationLinks>{this.generateLinks()}</NavigationLinks>
          </div>
        </NavbarBottom>
      </NavbarContainer>
    )
  }
}

export default inject("store")(observer(Navbar))
