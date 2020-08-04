import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineYearlineContainer = styled.div`
  height: 100%;
  width: 100%;
  outline: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  //overflow-x: scroll;
`

export const TimelineDot = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${colors.white};
  border-radius: 50%;
  margin: 0 0.5rem;
`
