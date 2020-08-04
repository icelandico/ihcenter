import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineMenuContainer = styled.div`
  width: 5%;
  color: ${colors.lightBrown};
  font-size: 1.2rem;
  text-transform: uppercase;
  outline: 1px solid goldenrod;
`

export const TimelineMenuOptions = styled.div`
  display: flex;
`

export const TimelineOption = styled.div<{
  option: string
  active?: boolean
}>`
  border: 1px solid goldenrod;
  flex: 1;
  height: 3rem;
  cursor: pointer;
  background-color: navajowhite;
  opacity: ${props => (props.active ? 1 : 0.5)};

  svg {
    width: 100%;
  }
`