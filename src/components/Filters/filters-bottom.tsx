import React, { useState } from "react"
import { observer, inject } from "mobx-react"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"
import { rootStore } from "../../store/RootStore"
import { TYPE, SHOW_ALL } from "../../store/constants/filters"

interface Props {
  store?: typeof rootStore
}

const FiltersBottom: React.FC<Props> = props => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["person", "writing", "event"]

  const switchFilterTab = (filter: string): void => {
    if (filter === activeTab) {
      setActiveTab("")
      props.store.articleStore.setFilter(SHOW_ALL)
      return
    }
    setActiveTab(filter)
    props.store.articleStore.setFilter(TYPE)
  }

  const checkIfActive = (filter: string): boolean => {
    return activeTab === filter
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
