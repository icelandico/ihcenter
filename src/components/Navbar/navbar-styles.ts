import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { colors } from "../../styles/colors"
import { ReactComponent as SearchIcon } from "../../static/icons/SEARCH.svg"
import AppLogo from "../../static/icons/LOGO_ALT.svg"

export const NavbarContainer = styled.nav`
  height: 100%;
  width: 100%;
`

export const SearchIconSvg = styled(SearchIcon)`
  position: absolute;
  left: -3rem;
  height: 35%;
`

export const Home = styled.div`
  width: 100%;
  height: 100%;
  background-color: navajowhite;
`

export const NavbarTop = styled.div`
  height: 30%;
`

export const NavbarElement = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const NavbarSearch = styled(NavbarElement)`
  width: 30rem;
  position: relative;
  margin-top: 1rem;
`

export const NavbarBottom = styled.div`
  height: 70%;
  border-top: 1px solid ${colors.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const NavigationLinks = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;

  & a {
    color: ${colors.white};
  }
`

export const NavigationItem = styled.li`
  margin-left: 1rem;
  width: 60px;
  text-align: center;
  max-height: 70px;

  & p {
    text-transform: uppercase;
    color: ${colors.green};
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
  }

  & a {
    text-decoration: none;
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`

export const NavigationIcon = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
`

const activeClassName = "highlighted"

export const NaviLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    ${NavigationIcon} {
      border-radius: 50%;
      box-shadow: ${colors.green} 0 0 0 5px;
    }
  }
`


export const NavbarLogo = styled.div`
  background-image: url(${AppLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${colors.darkGreen};
  width: 30rem;
  height: 50%;
  position: absolute;
  top: -20%;
  outline: 1rem solid ${colors.darkGreen};
`
