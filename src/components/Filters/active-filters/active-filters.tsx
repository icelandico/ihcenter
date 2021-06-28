import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { ActiveFiltersContainer, SingleFilter } from "./active-filters-styles"
import { rootStore } from "../../../store/RootStore"
import { FilterModel } from "../../../store/models/filterModel"
import Checkmark from "../../shared/Checkmark/checkmark"

interface IProps {
  store?: typeof rootStore
}

const ActiveFilters: FunctionComponent<IProps> = ({ store }) => {
  const { articleStore } = store

  const removeFilter = (filter: FilterModel) => {
    articleStore.removeFilter(filter)
  }

  return (
    <ActiveFiltersContainer>
      {articleStore.activeFilters.parameters.map((filter: FilterModel) => {
        return (
          <SingleFilter
            onClick={() => removeFilter(filter)}
            key={`${filter.name}-${filter.type}`}
            filterState={filter.state}
          >
            <Checkmark mode={filter.state === 1 ? "on" : "off"} scale={0.6} />
            <p>{filter.name.toLowerCase()}</p>
          </SingleFilter>
        )
      })}
    </ActiveFiltersContainer>
  )
}

export default inject("store")(observer(ActiveFilters))
