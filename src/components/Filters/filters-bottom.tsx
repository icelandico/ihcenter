import React, { FunctionComponent, useState } from "react"
import { FiltersContainer, SingleFilterBox } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"

const FiltersBottom: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["person", "writing", "event"]

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
              noCross
            />
          </SingleFilterBox>
        )
      })}
    </FiltersContainer>
  )
}

export default FiltersBottom
