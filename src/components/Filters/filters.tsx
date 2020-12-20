import React, { FunctionComponent, useState } from "react"
import { FiltersContainer } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"

const Filters: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["nationality", "fields", "current"]

  const switchFilterTab = (filter: string): void => {
    setActiveTab(filter)
  }

  return (
    <FiltersContainer>
      {filterTypes.map(filter => {
        return (
          <FilterBox
            filterType={filter}
            clickHandler={() => switchFilterTab(filter)}
            activeTab={activeTab}
          />
        )
      })}
    </FiltersContainer>
  )
}

export default Filters
