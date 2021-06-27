import styled from "styled-components"
import { colors } from "../../styles/colors"

export const CustomMarker = styled.div<{ color?: string }>`
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 1rem solid ${props => props.color || colors.lightBrown};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const CustomPopup = styled.div<{ color: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50% 50% 50% 0;
  background: ${props => props.color};
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -1.5rem 0 0 -1.45rem;

  div {
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
    background-repeat: no-repeat;
    background-size: 90%;
    position: relative;
    top: 2px;
  }

`
