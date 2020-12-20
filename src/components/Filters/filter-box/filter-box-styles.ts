import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const FilterBoxContainer = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  //border: 2px solid ${colors.lightBrown};
  cursor: pointer;
  
  &::after {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    content: "";
    width: 2rem;
    height: 2rem;
    background: linear-gradient(#fff,#fff), linear-gradient(#fff,#fff);
    background-position: center;
    background-size: 40% 2px,2px 40%;
    background-repeat: no-repeat;
  }
`
