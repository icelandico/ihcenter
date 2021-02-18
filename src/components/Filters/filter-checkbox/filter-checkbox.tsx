import React, { FunctionComponent, useState, useEffect } from "react"
import {
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxInput
} from "./filter-checkbox-styles"
import { rootStore } from "../../../store/RootStore"
import { inject, observer } from "mobx-react"

interface IProps {
  filterName: string
  filterType: string
  store?: typeof rootStore
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filterName, filterType, store } = props
  const [checked, setChecked] = useState<boolean>(false)

  const handleSwitchFilter = (name: string, type: string) => {
    store.articleStore.handleActiveFilters(name, type)
    console.log('store', store.articleStore.activeFilters)
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
