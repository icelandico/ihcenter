import styled from "styled-components"
import { colors } from "../../styles/colors"

export const EventCardContainer = styled.div<{
  opened: boolean
}>`
  position: absolute;
  top: ${props => (props.opened ? "-15rem" : "0")};
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  height: 13rem;
  min-width: 20rem;
  width: fit-content;
  background-color: ${colors.darkGreen};
  transition: all 0.3s;
  transition-timing-function: cubic-bezier(.17, .67, .47, 1.27);
  opacity: ${props => (props.opened ? "1" : "0")};
  pointer-events: ${props => (props.opened ? "auto" : "none")};
`

export const EventCardContent = styled.div`
  height: 100%;
  border: 0.1rem solid ${colors.green};
  padding: 0.5rem 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  
  &::after {
    position: absolute;
    content: "";
    height: 3rem;
    width: 1px;
    left: 50%;
    bottom: -3.5rem;
    transform: translate(-50%, -50%);
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

export const EventCardOpener = styled.div<{
  opened: boolean
}>`
  position: absolute;
  left: 50%;
  top: -0.5rem;
  transform: translateX(-50%) rotate(-135deg);
  border: solid ${colors.lightBrown};
  border-width: 0 0.2rem 0.2rem 0;
  padding: 0.2rem;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${props => (props.opened ? "0" : "1")};
`
