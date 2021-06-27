import styled, { keyframes } from "styled-components"
import { colors } from "../../../styles/colors"

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

export const Checkbox = styled.div<{
  scale?: number
}>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  transform: scale(${props => (props.scale ? props.scale : 1)});
`

export const CheckboxExcluded = styled(Checkbox)`
   ${Checkbox} + &::after {
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::before {
    position: absolute;
    left: 45%;
    top: 12%;
    content: "";
    height: 1.3rem;
    border-left: 2px solid ${colors.regularRed};
    transform: rotate(135deg);
  }

  &::after {
    position: absolute;
    left: 45%;
    top: 12%;
    content: "";
    height: 1.3rem;
    border-left: 2px solid ${colors.regularRed};
    transform: rotate(-45deg);
`

export const CheckboxIncluded = styled(Checkbox)`
  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Checkbox} + &::after {
    display: block;
    top: 0;
    left: 0.45rem;
    width: 30%;
    height: 55%;
    border: solid ${colors.lightGreen};
    border-width: 0 0.2rem 0.2rem 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`

export const CheckmarkContainer = styled.div`
  width: 1.5rem;
  position: relative;
`
