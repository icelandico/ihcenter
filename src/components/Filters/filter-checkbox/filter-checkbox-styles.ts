import styled, { keyframes, css } from "styled-components"
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

const includedIcon = css`
  ${CheckboxInput}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${CheckboxLabel}:hover & {
    outline: 2px solid ${colors.lightBrown};
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked + &::after {
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

  &:disabled {
    cursor: not-allowed;
  }
`

const excludedIcon = css`
  ${CheckboxInput}:not(:disabled):checked & {
    background: #c188cc;
  }

  ${CheckboxLabel}:hover & {
    outline: 2px solid ${colors.lightBrown};
  }
  
  ${CheckboxInput}:checked + &::after {
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:before {
    content: "";
    height: 1.3rem;
    border-left: 2px solid ${colors.regularRed};
    position: absolute;
    transform: rotate(45deg);
    left: 50%;
    top: 13%;
  }

  &:after {
    content: "";
    height: 1.3rem;
    border-left: 2px solid ${colors.regularRed};
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
    top: 13%;
`

const renderIcon = (value: string) => {
  switch (value) {
    case "include":
      return includedIcon
    case "exclude":
      return excludedIcon
    default:
      return ""
  }
}

export const CheckboxIndicator = styled.div<{
  checkboxState: string
}>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  left: -2.5rem;
  outline: 1px solid ${colors.lightBrown};

  ${props => renderIcon(props.checkboxState)}

`
