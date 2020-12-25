import React, { FunctionComponent, useState, useEffect } from "react"
import { FilterTabContainer } from "./filter-tab-styles"
import { apiEndpoints } from "../../../store/api/api"

interface IProps {
  filterType: string
  isActive: boolean
  checkboxSet: string[]
}

interface IFilter {
  [key: string]: string
}

const FilterTab: FunctionComponent<IProps> = props => {
  const { filterType, isActive } = props
  const [filterOptions, setFilterOptions] = useState<any>({})

  const chooseFiltersUrl = (type: string) => {
    switch (type) {
      case "current":
        return apiEndpoints.getProfessions
      case "fields":
        return apiEndpoints.getProfessions
      default:
        return apiEndpoints.getProfessions
    }
  }

  const fetchFilters = async (type: string) => {
    const fetchApi = await fetch(chooseFiltersUrl(type))
    const results = await fetchApi.json()
    filterOptions[type] = await results.map((filter: IFilter) => ({
      name: filter.name,
      id: filter.id
    }))
    console.log(
      results.map((filter: IFilter) => ({
        name: filter.name,
        id: filter.id
      }))
    )
  }

  useEffect(() => {
    if (!filterOptions[filterType]) fetchFilters(filterType)
  }, [])

  return (
    <FilterTabContainer isActive={isActive}>
      Filter type:
      {filterType}
      {filterOptions[filterType] &&
        filterOptions[filterType].map((filter: any) => {
          return <p>{filter.name}</p>
        })}
    </FilterTabContainer>
  )
}

export default FilterTab
