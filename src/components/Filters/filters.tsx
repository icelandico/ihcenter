import React, { FunctionComponent, useState } from "react"
import { FiltersContainer } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"

const Filters: FunctionComponent = (props) => {
  const [tabOpened, setOpened] = useState<string>("")
  const filterTypes = ["nationality", "fields", "current"]

  const switchFilterTab = (filter: string): void => {
    console.log("filter clicked", filter)
  }

  return (
    <FiltersContainer>
      {filterTypes.map(filter => {
        return (
          <FilterBox filterType={filter} clickHandler={() => switchFilterTab(filter)} />
        )
      })}
    </FiltersContainer>
  )
}

export default Filters
