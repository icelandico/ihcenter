import styled, { keyframes } from "styled-components"
import { colors } from "../../../styles/colors"

const loaderKeyframes = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
  height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
  height: 5em;
}
`

export const LoaderC = styled.div`
  &,
  &::after,
  &::before {
    background: ${colors.lightBrown};
    -webkit-animation: ${loaderKeyframes} 1s infinite ease-in-out;
    animation: ${loaderKeyframes} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  & {
    color: ${colors.white};
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
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
