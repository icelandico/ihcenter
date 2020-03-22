import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const TabContainer = styled.div`
  border-top: 1px solid ${colors.green};
  padding: 1rem 0;
  position: relative;
  margin: 0 auto 3rem;
  width: 85%;
`

export const TabIcon = styled.div<{ round: boolean; border: boolean }>`
  position: absolute;
  top: 0;
  left: -3.5rem;
  height: 2.5rem;
  width: 2.5rem;
  border: ${props =>
    props.border ? `2px solid ${colors.lightBrown}` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${props => (props.round ? "50%" : "unset")};
`
