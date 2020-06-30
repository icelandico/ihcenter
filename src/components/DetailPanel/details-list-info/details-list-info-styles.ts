import styled from "styled-components"

export const DetailsTop = styled.div<{
  column: boolean
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.column ? `column` : "row")};
  align-items: flex-start;
`

export const DetailsTopItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0;

  & svg {
    margin: 0.5rem 0;
  }
`

export const DetailedContentTab = styled.div`
  padding: 0 2rem 0 0.5rem;
  overflow-y: auto;
  width: 45%;
  max-height: -webkit-fill-available;
`
