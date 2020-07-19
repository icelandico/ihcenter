import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TimelineDateContainer = styled.div`
  height: 4rem;
  margin: 0 auto;
  width: 14rem;
  color: ${colors.lightBrown};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const TimelineDate = styled.input`
  font-size: 36px;
  margin: 0 1rem;
  padding: 0;
  font-family: "Krub", sans-serif;
  font-weight: 200;
  border: none;
  width: 8rem;
  background: transparent;
  color: ${colors.lightBrown};

  &:focus {
    outline: 1px solid ${colors.lightBrown};
  }
`

export const TimeArrow = styled.div<{
  direction: string
}>`
  padding: 0.75rem;
  box-shadow: 1px -1px 0 1px ${colors.lightbrown} inset;
  -webkit-box-shadow: 2px -2px ${colors.lightbrown} inset;
  border: solid transparent;
  border-width: 0 0 1rem 1rem;
  transition: 0.2s;
  cursor: pointer;
  transform: ${props =>
    props.direction === "left" ? "rotate(45deg)" : "rotate(225deg)"};

  &:hover {
    box-shadow: 2px -2px 0 2px ${colors.lightbrown} inset;
    -webkit-box-shadow: 4px -4px ${colors.lightbrown} inset;
  }
`

export const TimeArrowDouble = styled(TimeArrow)<{
  direction: string
}>`
  position: relative;
  transform: ${props =>
    props.direction === "left" ? "rotate(45deg)" : "rotate(225deg)"};
  &:after {
    position: absolute;
    content: "";
    padding: 0.75rem;
    box-shadow: 1px -1px 0 1px ${colors.lightbrown} inset;
    -webkit-box-shadow: 2px -2px ${colors.lightbrown} inset;
    border: solid transparent;
    border-width: 0.5rem 0.5rem 1rem 1rem;
    transition: 0.2s;
    cursor: pointer;
    top: 0;
    right: 0;
  }
`
