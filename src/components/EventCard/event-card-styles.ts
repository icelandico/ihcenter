import styled from "styled-components"
import { colors } from "../../styles/colors"

export const EventCardContainer = styled.div`
  position: absolute;
  top: -12rem;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  height: 10rem;
  width: 20rem;
  background-color: ${colors.darkGreen};
`
