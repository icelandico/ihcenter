import React, { FunctionComponent, useState } from "react"
import { ActiveFiltersContainer, SingleFilter } from "./active-filters-styles"

const ActiveFilters: FunctionComponent = () => {
  const activeFilters = ["capitalism", "albanian", "economy", "critique"]

  return (
    <ActiveFiltersContainer>
      {activeFilters.map(filter => {
        return <SingleFilter>{filter}</SingleFilter>
      })}
    </ActiveFiltersContainer>
  )
}

export default ActiveFilters
