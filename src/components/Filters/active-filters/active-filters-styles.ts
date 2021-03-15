import styled from "styled-components"
import { colors } from "../../../styles/colors"

const chooseColor = (type: string) => {
  return type === "include" ? colors.lightGreen : colors.regularRed
}

export const ActiveFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding-left: 5.5%;
`
export const SingleFilter = styled.span<{
  filterType: string
  filterState: number
}>`
  margin-right: 0.75rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => chooseColor(props.filterType)};
`
