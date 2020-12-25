import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const FilterContainer = styled.div<{
  isActive: boolean
}>`
  //height: 75%;
  cursor: pointer;
  display: flex;
  align-items: center;
  //
  // &::after {
  //   position: absolute;
  //   top: 50%;
  //   transform: translate(0, -50%);
  //   content: "";
  //   width: 2rem;
  //   height: 2rem;
  //   background: linear-gradient(${colors.lightBrown}, ${colors.lightBrown}), linear-gradient(${colors.lightBrown}, ${colors.lightBrown});
  //   background-position: center;
  //   background-size: 50% 2px,2px 50%;
  //   background-repeat: no-repeat;
  // }
  
  &::before {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(0, -50%);
    content: "";
    width: ${props => (props.isActive ? "5rem" : "0")};
    height: 2px;
    background-color: ${colors.lightBrown};
    z-index: 2000;
  }
`

export const FilterIconBox = styled.div`
  width: 75%;
`

export const FilterCross = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(${colors.lightBrown}, ${colors.lightBrown}),
    linear-gradient(${colors.lightBrown}, ${colors.lightBrown});
  background-position: center;
  background-size: 50% 2px,2px 50%;
  background-repeat: no-repeat;
`
