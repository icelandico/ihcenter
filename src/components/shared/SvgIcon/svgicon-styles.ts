import styled from "styled-components"

type Props = {
  width?: number
  height?: number
}

export const SvgContainer = styled.div`
  height: ${(p: Props) => (p.height ? `${p.width}rem` : "3rem")};
  width: ${(p: Props) => (p.width ? `${p.width}rem` : "3rem")};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: auto;
  }
`
