import React, { FunctionComponent, useState, useEffect } from "react"
import { inject, observer } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import {
  CheckboxLabel,
  FilterCheckboxIndicator,
  FilterCheckboxExcluded,
  FilterCheckboxIncluded
} from "./filter-checkbox-styles"
import { rootStore } from "../../../store/RootStore"
import { FilterModel } from "../../../store/models/filterModel"

interface IProps {
  filter: FilterModel
  isChecked: boolean
  store?: typeof rootStore
}

interface IState {
  name: string
  id: number
}

const FilterCheckbox: FunctionComponent<IProps> = props => {
  const { filter, store } = props
  const [checkboxState, setCheckboxState] = useState<number>(0)

  const stateOptions: IState[] = [
    { id: 0, name: "" },
    { id: 1, name: "include" },
    { id: 2, name: "exclude" }
  ]

  const handleSwitchFilter = (name: string, type: string, id: number) => {
    const newState = checkboxState + 1
    const filter = { name, type, state: newState, id }
    if (newState >= stateOptions.length) {
      store.articleStore.removeFilter(filter)
      setCheckboxState(0)
      return
    }
    setCheckboxState(checkboxState + 1)

    if (newState === 1) {
      store.articleStore.insertFilter(filter)
    }
    if (newState === 2) {
      store.articleStore.changeFilterState(filter)
    }
  }

  const checkState = (name: string, type: string): number => {
    const storeSnapshot = getSnapshot(store.articleStore.activeFilters)
    return store.articleStore.getCurrentState(name, type)
  }

  const renderCheckbox = (state: string) => {
    switch (state) {
      case "include":
        return <FilterCheckboxIncluded />
      case "exclude":
        return <FilterCheckboxExcluded />
      default:
        return <FilterCheckboxIndicator />
    }
  }

  return (
    <CheckboxLabel
      onClick={() => handleSwitchFilter(filter.name, filter.type, filter.id)}
    >
      {filter.name}
      <FilterCheckboxIndicator />
      {renderCheckbox(stateOptions[checkState(filter.name, filter.type)].name)}
    </CheckboxLabel>
  )
}

export default inject("store")(observer(FilterCheckbox))
