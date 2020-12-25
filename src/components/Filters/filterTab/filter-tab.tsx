import React, { FunctionComponent, useState } from "react"
import { FilterTabContainer } from "./filter-tab-styles"

interface IProps {
  filterType: string
  isActive: boolean
  checkboxSet: string[]
}

const FilterTab: FunctionComponent<IProps> = props => {
  const { filterType, isActive } = props

  return (
    <FilterTabContainer isActive={isActive}>
      Filter type:
      {filterType}
    </FilterTabContainer>
  )
}

export default FilterTab
