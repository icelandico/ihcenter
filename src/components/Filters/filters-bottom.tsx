import React, { useState } from "react"
import { observer, inject } from "mobx-react"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"
import { rootStore } from "../../store/RootStore"
import { SHOW_ALL } from "../../store/constants/filters"

interface Props {
  store?: typeof rootStore
}

const FiltersBottom: React.FC<Props> = props => {
  const [activeTabs, setActiveTabs] = useState<string[]>([])
  const filterTypes = ["person", "writing", "event"]

  const switchFilterTab = (filter: string): void => {
    if (activeTabs.includes(filter)) {
      const newTabs = activeTabs.filter(el => el !== filter)
      setActiveTabs(newTabs)
      return
    }
    setActiveTabs(activeTabs.concat(filter))
    props.store.articleStore.setFilter(`type_${filter}`)
  }

  const checkIfActive = (filter: string): boolean => {
    return activeTabs.includes(filter)
  }

  return (
    <FiltersContainer>
      {filterTypes.map(filter => {
        return (
          <SingleFilterBox>
            <FilterBox
              filterType={filter}
              clickHandler={() => switchFilterTab(filter)}
              isActive={checkIfActive(filter)}
              noCross
            />
          </SingleFilterBox>
        )
      })}
    </FiltersContainer>
  )
}

export default inject("store")(observer(FiltersBottom))
