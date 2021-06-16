import React, { useState } from "react"
import { observer, inject } from "mobx-react"
import { getSnapshot } from "mobx-state-tree"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"
import { rootStore } from "../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const FiltersBottom: React.FC<Props> = props => {
  const [activeTabs, setActiveTabs] = useState<string[]>([])
  const filterTypes = ["person", "writing", "event"]

  const switchFilterTab = (filter: string): void => {
    if (activeTabs.includes(filter)) {
      const newTabs = activeTabs.filter(el => el !== filter)
      const filtersToRemove = activeTabs.filter(el => el === filter)
      setActiveTabs(newTabs)
      filtersToRemove.forEach(filter => props.store.articleStore.removeFilter({ name: filter, type: "type", state: 1, id: 0 }))
      return
    }
    props.store.articleStore.insertFilter({ name: filter, type: "type", state: 1, id: 0 })
    setActiveTabs(activeTabs.concat(filter))
  }

  const checkState = (name: string, type: string): number => {
    const storeSnapshot = getSnapshot(props.store.articleStore.activeFilters)
    return props.store.articleStore.getCurrentState(name, type)
  }

  return (
    <FiltersContainer>
      {filterTypes.map(filter => {
        return (
          <SingleFilterBox>
            <FilterBox
              filterType={filter}
              clickHandler={() => switchFilterTab(filter)}
              isActive={checkState(filter, "type") === 1}
              noCross
            />
          </SingleFilterBox>
        )
      })}
    </FiltersContainer>
  )
}

export default inject("store")(observer(FiltersBottom))
