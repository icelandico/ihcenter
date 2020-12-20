import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const FilterTabContainer = styled.div<{
  isActive: boolean
}>`
  position: absolute;
  left: 4rem;
  top: 0;
  background-color: ${colors.darkGreen};
  padding: 1rem;
  z-index: 2000;
  height: 400px;
  width: 150px;
  display: ${props => (props.isActive ? "unset" : "none")};
  font-size: 1.6rem;
`
