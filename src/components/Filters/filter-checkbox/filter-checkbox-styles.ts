import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { Checkbox } from "../../shared/Checkmark/checkmark-styles"
import {
  CheckboxIncluded,
  CheckboxExcluded
} from "../../shared/Checkmark/checkmark-styles"

export const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.5rem 0 0 2.5rem;
`

export const FilterCheckboxIndicator = styled(Checkbox)`
  left: -2.5rem;
  outline: 1px solid ${colors.lightBrown};

  ${CheckboxLabel}:hover & {
    outline: 2px solid ${colors.lightBrown};
  }
`

export const FilterCheckboxExcluded = styled(CheckboxExcluded)`
  left: -2.5rem;
`

export const FilterCheckboxIncluded = styled(CheckboxIncluded)`
  left: -2.5rem;
`
