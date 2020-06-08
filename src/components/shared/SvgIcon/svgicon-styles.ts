import styled from "styled-components"

type Props = {
  width?: number
}

export const SvgContainer = styled.div`
  height: 100%;
  width: ${(p: Props) => (p.width ? `${p.width}rem` : "1.5rem")};
  display: inline-block;
`
