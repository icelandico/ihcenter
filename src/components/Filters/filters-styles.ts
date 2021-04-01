import styled from "styled-components"

export const FiltersContainer = styled.div<{
  marginBottom?: boolean
}>`
  height: auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => (props.marginBottom ? "10rem" : 0)};
`

export const SingleFilterBox = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
`
