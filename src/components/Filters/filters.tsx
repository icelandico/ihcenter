import React, { FunctionComponent } from "react"
import { FiltersContainer } from "./filters-styles"
import FilterBox from "./filter-box/filter-box"

const Filters: FunctionComponent = () => {

  const filterTypes = [
    'nationality',
    'fields',
    'current'
  ]
  return (
    <FiltersContainer>
      {filterTypes.map(filter => {
        return <FilterBox filterType={filter}>Filter</FilterBox>
      })}
    </FiltersContainer>
  )
}

export default Filters
