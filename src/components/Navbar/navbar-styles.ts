import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { colors } from "../../styles/colors"

export const Home = styled.div`
  width: 100%;
  height: 100%;
  background-color: navajowhite;
`

export const NavbarTop = styled.div`
  height: 50%;
`

export const NavbarBottom = styled.div`
  height: 50%;
  border-top: 1px solid ${colors.green};
  display: flex;
  justify-content: space-between;
  padding-left: 4.5rem;
  padding-right: 1rem;

  & .navbar-search {
    /* border: 1px solid goldenrod; */
    width: 26%;
    position: relative;
  }

  & .navigation-links {
    /* border: 1px solid violet; */
  }

  & .nav-item {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 0.5rem;
  }
`

export const NavbarContainer = styled.nav`
  height: 100%;
  width: 100%;
`

export const NavigationLinks = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;

  & a {
    color: #fff;
  }
`

export const NavigationItem = styled.li`
  margin-left: 1rem;
  width: 60px;
  /* outline: 1px solid olivedrab; */
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
  height: 35px;
  width: 35px;
  /* background-color: ${colors.lightBrown}; */
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
  // outline: 1px solid red;
`
const activeClassName = "highlighted"

export const NaviLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    ${NavigationIcon} {
      border: 0px solid ${colors.green};
      border-radius: 50%;
      box-shadow: ${colors.green} 0 0 0 5px;
    }
  }
`

export const SearchInput = styled.input`
  border: 2px solid ${colors.green};
  background-color: transparent;
  width: 100%;
  height: 50%;
  padding-left: 15px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.green};
  }
`

export const SearchIconSvg = css`
  position: absolute;
  left: -20px;
  width: 100%;
  height: 100%;
`

export const PageTitle = styled.h1`
  display: inline-block;
  margin-top: -10px;
  height: 20px;
  line-height: 20px;
  font-size: 32px;
  background-color: ${colors.darkGreen};
  font-weight: 100;
  text-transform: uppercase;
  position: absolute;
  padding: 0 1rem;
  margin-left: -1rem;
`
