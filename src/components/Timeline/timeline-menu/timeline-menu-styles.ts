import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineMenuContainer = styled.div`
  width: 5%;
  text-align: center;
  color: ${colors.lightBrown};
  font-size: 1.2rem;
  text-transform: uppercase;
  border-left: 0.1rem solid ${colors.green};
`

export const TimelineMenuOptions = styled.div`
  display: flex;
`

export const TimelineOption = styled.div<{
  option: string
  active?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 3rem;
  cursor: pointer;

  svg {
    height: 2rem;
    width: 2rem;
    fill: ${props => (props.active ? colors.lightBrown : colors.green)};
  }
`
