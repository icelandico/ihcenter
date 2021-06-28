import React, { FunctionComponent } from "react"
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

const FilterCheckbox: FunctionComponent<IProps> = ({ filter, store }) => {

  const stateOptions: IState[] = [
    { id: 0, name: "" },
    { id: 1, name: "include" },
    { id: 2, name: "exclude" }
  ]

  const handleSwitchFilter = (name: string, type: string, id: number) => {
    const currentState = checkState(name, type)
    const newState = currentState + 1 > stateOptions.length - 1 ? 0 : currentState + 1
    const filter = { name, type, state: newState, id }

    if (newState === 0) {
      store.articleStore.removeFilter(filter)
      return
    }

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
      data-state={checkState(filter.name, filter.type)}
    >
      {filter.name}
      <FilterCheckboxIndicator />
      {renderCheckbox(stateOptions[checkState(filter.name, filter.type)].name)}
    </CheckboxLabel>
  )
}

export default inject("store")(observer(FilterCheckbox))
