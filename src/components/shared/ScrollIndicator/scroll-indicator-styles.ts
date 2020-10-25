import styled, { keyframes } from "styled-components"
import { CustomMarker } from "../../Marker/marker-styles"
import { Options } from "./scroll-indicator.model"

const getPosition = (pos?: string) => {
  switch (pos) {
    case "right":
      return "95%"
    case "left":
      return "5%"
    default:
      return "50%"
  }
}

const indicatorKeyframes = keyframes`
  0% { bottom: 1.5rem; opacity: 1; }
  50% { bottom: 0.2rem; opacity: 0.2; }
  100% { bottom: 1.5rem; opacity: 1; }
`

export const Indicator = styled(CustomMarker)<{
  options: Options
}>`
  position: sticky;
  left: ${props => getPosition(props.options.position)};
  -webkit-animation: ${indicatorKeyframes} 2s infinite ease-in-out;
  animation: ${indicatorKeyframes} 2s infinite ease-in-out;
  z-index: 10;
`
