import styled from "styled-components"

export const SvgContainer = styled.div<{
  width?: number
  height?: number
}>`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    height: 100%;//${p => (p.height ? `${p.width}rem` : "1.25rem")};
    width: 100%;//${p => (p.width ? `${p.width}rem` : "1.25rem")};
  }
`
