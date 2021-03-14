import React, { FunctionComponent, useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import {
  CheckboxLabel,
  CheckboxIndicator,
  Checkbox,
  CheckboxIncluded,
  CheckboxExcluded
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
    const newState = checkboxState + 1
    if (newState >= stateOptions.length) {
      setCheckboxState(0)
      return
    }
    setCheckboxState(checkboxState + 1)

    const filterState = stateOptions[checkboxState].name
    stateOptions[checkboxState].name !== "" &&
      store.articleStore.handleActiveFilters(name, type, filterState)
  }

  const checkState = (name: string, type: string): boolean => {
    const storeSnapshot = getSnapshot(store.articleStore.activeFilters)
    return store.articleStore.isFilterActive(name, type)
  }

  const renderCheckbox = (state: string) => {
    switch (state) {
      case "include":
        return <CheckboxIncluded data-state={state} />
      case "exclude":
        return <CheckboxExcluded data-state={state} />
      default:
        return <CheckboxIndicator data-state={state} />
    }
  }

  return (
    <CheckboxLabel onClick={() => handleSwitchFilter(filterName, filterType)}>
      {filterName}
      <Checkbox id={`${filterType}-${filterName.toLowerCase()}`} />
      {renderCheckbox(stateOptions[checkboxState].name)}
    </CheckboxLabel>
  )
}

export default inject("store")(observer(FilterCheckbox))
