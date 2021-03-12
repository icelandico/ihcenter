import styled from "styled-components"
import { colors } from "../../../styles/colors"

const chooseColor = (type: string) => {
  switch (type) {
    case "nationality":
      return colors.lightBrown
    case "professions":
      return colors.darkBlue
    case "mainideas":
      return colors.woodBrown
    default:
      return colors.white
  }
}

export const ActiveFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  padding-left: 5.5%;
`
export const SingleFilter = styled.span<{ filterType: string }>`
  margin-right: 0.75rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => chooseColor(props.filterType)};
`
