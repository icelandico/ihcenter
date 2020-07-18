import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const DetailsTop = styled.div<{
  column: boolean
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.column ? `column` : "row")};
  align-items: flex-start;
  font-family: "Alegreya Sans", sans-serif;
`

export const DetailsTopItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;

  & svg {
    margin: 0.5rem 0;
  }
`

export const DetailsContainer = styled.div`
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const WritingsList = styled.ul`
  padding: 0 0 0 1.5rem;

  li {
    padding-left: -0.5rem;
    color: ${colors.green};
  }
`

export const WritingsTitle = styled.span`
  color: ${colors.lightBrown};
`

export const WritingsYear = styled.span`
  color: ${colors.green};
  margin-left: 0.5rem;
  font-weight: 700;
`
