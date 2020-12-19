import React, { FunctionComponent } from "react"
import { FiltersContainer } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"

const Filters: FunctionComponent = () => {
  return (
    <FiltersContainer>
      {[1, 2, 3].map(filter => {
        return <FilterBox>Filter</FilterBox>
      })}
    </FiltersContainer>
  )
}

export default Filters
