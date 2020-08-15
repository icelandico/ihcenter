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
    width: auto;
    transform: translate3d(-250px, 0, 0) translateY(-50%);
    top: 50%;
  }
`

export const TimelineDot = styled.li`
  margin: 0 0.5rem;
  float: left;
  list-style: none;
  position: relative;

  span:first-child {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${colors.white};
  }
`

export const TimelineDate = styled.span`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  content: "";
  width: 5px;
  height: 5px;
  background-color: violet;
  transform: translateX(-50%);
`
