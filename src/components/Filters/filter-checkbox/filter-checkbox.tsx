import React, { FunctionComponent, useState, useEffect } from "react"
import {
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxInput
} from "./filter-checkbox-styles"

interface IProps {
  filterName: string
  filterType: string
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filterName, filterType } = props
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <CheckboxLabel>
      {filterName}
      <CheckboxInput
        id={`${filterType}-${filterName.toLowerCase()}`}
        type="checkbox"
        name={filterName.toLowerCase()}
        value={filterName.toLowerCase()}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <CheckboxIndicator />
    </CheckboxLabel>
  )
}

export default FilterCheckbox
