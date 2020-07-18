import styled, { keyframes } from "styled-components"
import { CustomMarker } from "../../Marker/marker-styles"

const indicatorKeyframes = keyframes`
  0% { bottom: 1.5rem; opacity: 1; }
  50% { bottom: 0.2rem; opacity: 0.2; }
  100% { bottom: 1.5rem; opacity: 1; }
`

export const Indicator = styled(CustomMarker)`
  position: sticky;
  left: 50%;
  -webkit-animation: ${indicatorKeyframes} 2s infinite ease-in-out;
  animation: ${indicatorKeyframes} 2s infinite ease-in-out;
  z-index: 10;
`
