import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineYearlineContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
`

export const TimelineDot = styled.div`
  margin: 0 0.5rem;

  div {
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: ${colors.white};
  }
`
