import styled from "styled-components"

type Props = {
  width?: number
  height?: number
}

export const SvgContainer = styled.div`
  height: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    height: ${(p: Props) => (p.height ? `${p.width}rem` : "1.25rem")};
    width: ${(p: Props) => (p.width ? `${p.width}rem` : "1.25rem")};
  }
`
