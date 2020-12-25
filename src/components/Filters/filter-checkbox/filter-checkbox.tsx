import React, { FunctionComponent, useState, useEffect } from "react"
import {
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxInput
} from "./filter-checkbox-styles"

interface IProps {
  filterName: string
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filterName } = props
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <CheckboxLabel>
      {filterName}
      <CheckboxInput
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxIndicator />
    </CheckboxLabel>
  )
}

export default FilterCheckbox
