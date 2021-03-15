import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const FilterContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const FilterIconBox = styled.div`
  width: 65%;
  margin-right: 0.5rem;
`

export const FilterCross = styled.div<{
  isActive: boolean
}>`
  position: relative;
  width: 1rem;

  &:after {
    position: absolute;
    content: "+";
    font-size: 2vh;
    font-weight: bold;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    position: absolute;
    content: "";
    width: ${props => (props.isActive ? "5rem" : "0")};
    height: 2px;
    background-color: ${colors.lightBrown};
    z-index: 2000;
  }
`
