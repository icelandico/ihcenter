import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { fonts } from "../../../styles/font"

export const TimelineYearlineContainer = styled.div<{ translateVal: number }>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  ul {
    padding: 0;
    margin: 0;
    position: absolute;
    width: auto;
    transform: translate3d(${props => props.translateVal}px, 0, 0) translateY(-50%);
    top: 50%;
    transition: transform 0.5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`

export const TimelineDot = styled.li<{ isData: boolean }>`
  margin: 0 0.5rem;
  float: left;
  list-style: none;
  position: relative;
  cursor: pointer;

  span:first-child {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${props =>
      props.isData ? colors.lightBrown : colors.green};
  }
`

export const TimelineDate = styled.span<{ isHidden: boolean }>`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  width: 5rem;
  height: 5px;
  transform: translateX(-52%);
  font-size: 1.6rem;
  font-family: ${fonts.second};
  text-align: center;
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition: 0.5s;
  transition-delay: 0.25s;

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
