import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineYearlineContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  ul {
    padding: 0;
    margin: 0;
    position: absolute;
    width: 2150px;
    transform: translate3d(-250px, 0, 0) translateY(-50%);
    top: 50%;
  }
`

export const TimelineDot = styled.li`
  margin: 0 0.5rem;
  float: left;
  list-style: none;

  span {
    display: inline-block;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: ${colors.white};
  }
`
