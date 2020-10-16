import styled from "styled-components"
import { colors } from "../../styles/colors"

export const EventCardContainer = styled.div<{
  opened: boolean
}>`
  position: absolute;
  top: -12rem;
  left: 50%;
  right: 50%;
  transform: translateX(-50%)
    rotateY(${props => (props.opened ? "180deg" : "90deg")});
  padding: 1rem;
  min-height: 10rem;
  height: 100%;
  width: 20rem;
  background-color: ${colors.darkGreen};
  transition: all 1s;
  transition-timing-function: cubic-bezier(.17, .67, .47, 1.27);
  z-index: -1;
`

export const EventCardContent = styled.div`
  height: 100%;
  border: 0.1rem solid ${colors.green};

  &::after {
    position: absolute;
    content: "";
    height: 3rem;
    width: 1px;
    left: 50%;
    bottom: -3.5rem;
    transform: translateY(-50%);
    background-color: ${colors.green};
  }
`

export const EventCardClose = styled.span`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateY(-50%);
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    height: 2rem;
    border-left: 2px solid ${colors.lightBrown};
    transform: rotate(45deg);
  }
  
  &::before {
    position: absolute;
    content: "";
    height: 2rem;
    border-left: 2px solid ${colors.lightBrown};
    transform: rotate(-45deg);
  }
  
`
