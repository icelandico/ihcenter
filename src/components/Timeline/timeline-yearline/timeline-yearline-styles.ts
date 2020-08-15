import styled from "styled-components"
import { colors } from "../../../styles/colors"
import {fonts} from "../../../styles/font";

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
    transform: translate3d(-245px, 0, 0) translateY(-50%);
    top: 50%;
  }
`

export const TimelineDot = styled.li<{
  isData: boolean
}>`
  margin: 0 0.5rem;
  float: left;
  list-style: none;
  position: relative;

  span:first-child {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${props =>
      props.isData ? colors.lightBrown : colors.green};
  }
`

export const TimelineDate = styled.span`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  width: 5rem;
  height: 5px;
  transform: translateX(-52%);
  font-size: 1.6rem;
  font-family: ${fonts.second};
  text-align: center;

  &:before {
    position: absolute;
    content: "";
    height: 1.3rem;
    width: 0.1rem;
    background-color: ${colors.lightBrown};
    top: -1.3rem;
    left: 50%;
  }
`
