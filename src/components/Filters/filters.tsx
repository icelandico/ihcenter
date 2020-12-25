import React, { FunctionComponent, useState, useRef } from "react"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"
import FilterTab from "./filterTab/filter-tab"
import { getFiltersCheckboxSet } from "./filter-box/filterCheckboxSet"

const Filters: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["nationality", "fields", "current"]

  const switchFilterTab = (filter: string, outsideClick = false): void => {
    if (outsideClick) {
      setActiveTab("")
      return
    }
    filter === activeTab ? setActiveTab("") : setActiveTab(filter)
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
            />
            <FilterTab
              filterType={filter}
              activeTab={activeTab}
              checkboxSet={getFiltersCheckboxSet(filter)}
              outsideClick={() => switchFilterTab(activeTab, true)}
            />
          </SingleFilterBox>
        )
      })}
    </FiltersContainer>
  )
}

export default Filters
