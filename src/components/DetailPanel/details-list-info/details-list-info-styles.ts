import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const DetailsContainer = styled.div`
  border-top: 1px solid ${colors.green};
`

export const DetailsTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const DetailsTopItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;
  
  & svg {
    margin: 0.5rem;
  }
`
