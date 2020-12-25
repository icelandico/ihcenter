import styled, { keyframes } from "styled-components"
import { colors } from "../../../styles/colors"

export const CheckboxInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

export const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.5rem 0 0 2.5rem;
`

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

export const CheckboxIndicator = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  left: -2.5rem;
  border: 1px solid ${colors.lightBrown};

  ${CheckboxInput}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${CheckboxLabel}:hover & {
    border-width: 2px;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked + &::after {
    display: block;
    top: 0;
    left: 0.35rem;
    width: 30%;
    height: 55%;
    border: solid ${colors.lightGreen};
    border-width: 0 0.2rem 0.2rem 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`
