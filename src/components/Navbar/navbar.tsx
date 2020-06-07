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

class Navbar extends React.Component<any, any> {
  menuItems: any[] = [
    {
      name: "timeline",
      route: "/timeline"
    },
    {
      name: "diagram",
      route: "/diagram"
    },
    {
      name: "list",
      route: "/list"
    },
    {
      name: "compare",
      route: "/compare"
    },
    {
      name: "map",
      route: ""
    }
  ]

  generateLinks = () => {
    return this.menuItems.map((item, index) => {
      return (
        <NavigationItem key={`nav-${index + 1}`}>
          <NaviLink to={`${item.route}`} exact>
            <NavigationIcon
              src={require(`./../../static/icons/MODE_${item.name}.svg`)}
              style={
                {
                  // backgroundImage: `url(http://franchise.carolsaundersswimschool.co.uk/wp-content/uploads/2017/02/img-placeholder.png)`,
                  // backgroundImage: `url('./../../static/icons/MODE_${item}.svg')`,
                }
              }
            />
            <p>{item.name}</p>
          </NaviLink>
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
