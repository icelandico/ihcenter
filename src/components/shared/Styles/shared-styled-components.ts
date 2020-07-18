import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const BottomGradient = styled.div`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12rem;
  pointer-events: none;
  background: linear-gradient(transparent 0, rgba(0, 57, 63, 1));
`