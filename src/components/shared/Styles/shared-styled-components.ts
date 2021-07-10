import styled from "styled-components"

export const BottomGradient = styled.div<{ active?: boolean }>`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12rem;
  pointer-events: none;
  opacity: ${props => (props.active ? "1" : "0")};
  background: linear-gradient(transparent 0, rgba(0, 57, 63, 1));
  transition: opacity 1s;
`
