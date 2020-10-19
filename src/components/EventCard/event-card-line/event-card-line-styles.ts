import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const EventCardLineC = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  border-bottom: 0.1rem solid ${colors.green};
  font-size: 1.4rem;
  height: 3rem;

  > div {
    height: 100%;
  }

  svg {
    width: auto;
    margin-right: 1rem;
  }
`
