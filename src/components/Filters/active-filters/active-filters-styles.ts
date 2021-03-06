import styled from "styled-components"
import { colors } from "../../../styles/colors"

const chooseColor = (state: number) => {
  return state === 1 ? colors.lightGreen : colors.regularRed
}

export const ActiveFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  padding-left: 5%;
`
export const SingleFilter = styled.div<{
  filterState: number
}>`
  display: flex;
  margin-right: 0.5rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => chooseColor(props.filterState)};
`
