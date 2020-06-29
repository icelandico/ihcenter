import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TabContainer = styled.div`
  padding: 0;
  margin: 0 auto 1rem;
  display: flex;
`

export const TabIcon = styled.div<{
  round: boolean
  border: boolean
  extend: number
}>`
  height: ${props => (props.extend ? `${props.extend}rem` : "2.5rem")};
  min-width: 2.5rem;
  border: ${props =>
    props.border ? `2px solid ${colors.lightBrown}` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => (props.round ? "50%" : "unset")};
  position: relative;
`

export const TabExtraIcon = styled.span`
  position: absolute;
  transform: translate(70%, -50%);
  content: "";
  height: 2rem;
  width: 2rem;
`

export const TabContent = styled.div`
  flex-grow: 1;
  height: auto;
  width: 100%;
  border-top: 1px solid ${colors.green};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 1rem;
  padding-top: 1rem;
  font-size: 14px;

`
