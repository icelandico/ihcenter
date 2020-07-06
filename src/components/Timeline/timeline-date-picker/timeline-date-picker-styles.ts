import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { fonts } from "../../../styles/font"

export const TimelineDateContainer = styled.div`
  height: 4rem;
  margin: 0 auto;
  width: 14rem;
  color: ${colors.lightBrown};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const TimelineDate = styled.p`
  font-size: 36px;
`

const TimeArrow = styled.div`
  padding: 0.5rem;
  box-shadow: 1px -1px 0 1px ${colors.lightbrown} inset;
  -webkit-box-shadow: 2px -2px ${colors.lightbrown} inset;
  border: solid transparent;
  border-width: 0 0 1rem 1rem;
  transition: 0.2s;
  cursor: pointer;
  
  &:hover {
    box-shadow: 2px -2px 0 2px ${colors.lightbrown} inset;
    -webkit-box-shadow: 4px -4px ${colors.lightbrown} inset;
  }
`

export const ArrowLeft = styled(TimeArrow)`
  transform: rotate(45deg);
`
export const ArrowRight = styled(TimeArrow)`
  transform: rotate(225deg);
`
// export const TimelineDateContainer = styled.div`
//   height: 3rem;
//   background-color: #ccc;
//   opacity: 0.1;
// `
