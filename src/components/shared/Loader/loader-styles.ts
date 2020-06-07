import styled, { keyframes } from "styled-components"
import { colors } from "../../../styles/colors"

const loaderKeyframes = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4rem;
  }
  40% {
    box-shadow: 0 -2rem;
    height: 5rem;
}
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1001;
`

export const LoaderC = styled.div`
  &,
  &::after,
  &::before {
    background: ${colors.lightBrown};
    -webkit-animation: ${loaderKeyframes} 1s infinite ease-in-out;
    animation: ${loaderKeyframes} 1s infinite ease-in-out;
    width: 1rem;
    height: 4rem;
  }

  & {
    color: ${colors.lightBrown};
    text-indent: -9999rem;
    margin: 8.8rem auto;
    position: relative;
    font-size: 1.1rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    align-self: center;
  }

  &::after,
  &::before {
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -1.5rem;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &::after {
    left: 1.5rem;
  }
`
