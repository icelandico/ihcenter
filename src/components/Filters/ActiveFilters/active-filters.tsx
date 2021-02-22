import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { ActiveFiltersContainer, SingleFilter } from "./active-filters-styles"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const ActiveFilters: FunctionComponent<Props> = props => {
  const { activeFilters } = props.store.articleStore

  return (
    <ActiveFiltersContainer>
      {activeFilters.map(filter => {
        return <SingleFilter filterColor={filter.type}>{filter.name}</SingleFilter>
      })}
    </ActiveFiltersContainer>
  )
}

export default inject("store")(observer(ActiveFilters))
