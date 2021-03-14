import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { ActiveFiltersContainer, SingleFilter } from "./active-filters-styles"
import { CUSTOM, CUMULATIVE } from "../../../store/constants/filters"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const ActiveFilters: FunctionComponent<Props> = props => {
  const { articleStore } = props.store

  const removeFilter = (name: string, type: string) => {
    articleStore.handleActiveFilters(name, type)
    articleStore.activeFilters.length > 0
      ? articleStore.setFilter(CUSTOM)
      : articleStore.setFilter(CUMULATIVE)
  }

  return (
    <ActiveFiltersContainer>
      {articleStore.activeFilters.map(filter => {
        return (
          <SingleFilter
            filterType={filter.type}
            onClick={() => removeFilter(filter.name, filter.type)}
            key={`${filter.name}-${filter.type}`}
            filterState={filter.state}
            data-state={filter.state}
          >
            {filter.name}
          </SingleFilter>
        )
      })}
    </ActiveFiltersContainer>
  )
}

export default inject("store")(observer(ActiveFilters))
