import React, { FunctionComponent, useState } from "react"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"
import FilterTab from "./filterTab/filter-tab"

const Filters: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["nationality", "fields", "current"]

  const switchFilterTab = (filter: string): void => {
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
            <FilterTab filterType={filter} isActive={checkIfActive(filter)} />
          </SingleFilterBox>
        )
      })}
    </FiltersContainer>
  )
}

export default Filters
