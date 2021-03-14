import React, { FunctionComponent, useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import {
  CheckboxLabel,
  CheckboxIndicator,
  CheckboxInput
} from "./filter-checkbox-styles"
import { rootStore } from "../../../store/RootStore"

interface IProps {
  filterName: string
  filterType: string
  isChecked: boolean
  store?: typeof rootStore
}

interface IState {
  name: string
  id: number
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filterName, filterType, store } = props
  const [checkboxState, setCheckboxState] = useState<number>(0)

  const stateOptions: IState[] = [
    { id: 0, name: "" },
    { id: 1, name: "include" },
    { id: 2, name: "exclude" }
  ]

  // useEffect(() => {
  //   const isFilterActive = store.articleStore.activeFilters.some(
  //     filter => filter.name === filterName && filter.type === filterType
  //   )
  //   setCheckboxState(isFilterActive)
  // }, [])

  const handleSwitchFilter = (name: string, type: string) => {
    store.articleStore.handleActiveFilters(name, type)
    const newState = checkboxState + 1
    newState >= stateOptions.length
      ? setCheckboxState(0)
      : setCheckboxState(checkboxState + 1)
  }

  const checkState = (name: string, type: string): boolean => {
    const storeSnapshot = getSnapshot(store.articleStore.activeFilters)
    return store.articleStore.isFilterActive(name, type)
  }

  return (
    <CheckboxLabel>
      {filterName}
      <CheckboxInput
        id={`${filterType}-${filterName.toLowerCase()}`}
        type="checkbox"
        name={filterName.toLowerCase()}
        value={filterName.toLowerCase()}
        checked={checkState(filterName, filterType)}
        onChange={() => handleSwitchFilter(filterName, filterType)}
      />
      <CheckboxIndicator
        checkboxState={stateOptions[checkboxState].name}
        data-state={stateOptions[checkboxState].name}
      />
    </CheckboxLabel>
  )
}

export default inject("store")(observer(FilterCheckbox))
