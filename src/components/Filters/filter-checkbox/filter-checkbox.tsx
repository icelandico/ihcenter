import React, { FunctionComponent, useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import {
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxInput
} from "./filter-checkbox-styles"
import { rootStore } from "../../../store/RootStore"

interface IProps {
  filterName: string
  filterType: string
  store?: typeof rootStore
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filterName, filterType, store } = props
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    const isFilterActive = store.articleStore.activeFilters.some(
      filter => filter.name === filterName && filter.type === filterType
    )
    setChecked(isFilterActive)
  })

  const handleSwitchFilter = (name: string, type: string) => {
    store.articleStore.handleActiveFilters(name, type)
    setChecked(!checked)
  }

  return (
    <CheckboxLabel>
      {filterName}
      <CheckboxInput
        id={`${filterType}-${filterName.toLowerCase()}`}
        type="checkbox"
        name={filterName.toLowerCase()}
        value={filterName.toLowerCase()}
        checked={checked}
        onChange={() => handleSwitchFilter(filterName, filterType)}
      />
      <CheckboxIndicator />
    </CheckboxLabel>
  )
}

export default inject("store")(observer(FilterCheckbox))
