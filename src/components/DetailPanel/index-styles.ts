import styled from "styled-components"
import { colors } from "../../styles/colors"
import { fonts } from "../../styles/font"

export const DetailsMainContainer = styled.div`
  -webkit-box-shadow: 0px 0px 4rem 0px rgba(0, 57, 63, 0.8);
  -moz-box-shadow: 0px 0px 4rem 0px rgba(0, 57, 63, 0.8);
  box-shadow: 0px 0px 4rem 0px rgba(0, 57, 63, 0.8);
  background-color: ${colors.darkGreen};
  padding: 1rem;
  display: flex;
  height: 100%;
  font-family: ${fonts.base};
`