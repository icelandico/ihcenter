import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { ActiveFiltersContainer, SingleFilter } from "./active-filters-styles"
import { rootStore } from "../../../store/RootStore"
import { FilterModel } from "../../../store/models/filterModel"

interface Props {
  store?: typeof rootStore
}

const ActiveFilters: FunctionComponent<Props> = props => {
  const { articleStore } = props.store

  const removeFilter = (filter: FilterModel) => {
    articleStore.removeFilter(filter)
  }

  return (
    <ActiveFiltersContainer>
      {articleStore.activeFilters.map(filter => {
        return (
          <SingleFilter
            filterType={filter.type}
            onClick={() => removeFilter(filter)}
            key={`${filter.name}-${filter.type}`}
            filterState={filter.state}
          >
            {filter.name}
          </SingleFilter>
        )
      })}
    </ActiveFiltersContainer>
  )
}

export default inject("store")(observer(ActiveFilters))
