import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const FilterTabContainer = styled.div<{
  isActive: boolean
}>`
  position: absolute;
  left: 120%;
  top: 0;
  background-color: ${colors.darkGreen};
  padding: 1rem;
  z-index: 2000;
  min-width: 13rem;
  min-height: 10rem;
  max-height: 40rem;
  overflow-y: ${props => (props.isActive ? "auto" : "hidden")};
  overflow-x: hidden;
  display: ${props => (props.isActive ? "unset" : "none")};
  font-size: 1.6rem;
`
