import React, { FunctionComponent, useState, useEffect, useRef } from "react"
import { FilterTabContainer } from "./filter-tab-styles"
import { apiEndpoints } from "../../../store/api/api"
import FilterCheckbox from "../filter-checkbox/filter-checkbox"

interface IProps {
  filterType: string
  activeTab: string
  checkboxSet: string[]
  outsideClick: Function
}

interface IFilter {
  name: string
  id: number
}

const FilterTab: FunctionComponent<IProps> = props => {
  const { filterType, activeTab } = props
  const [filterOptions, setFilterOptions] = useState<any>({})
  const tabRef = useRef(null)

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
  }

  const checkIfActive = (filter: string): boolean => {
    return activeTab === filter
  }

  useEffect(() => {
    if (!filterOptions[filterType]) fetchFilters(filterType)
  }, [])

  // useEffect(() => {
  //   const handleOutsideClick = (ev: Event) => {
  //     if (tabRef.current && !tabRef.current.contains(ev.target)) {
  //       props.outsideClick()
  //     }
  //   }
  //
  //   if (checkIfActive(filterType)) document.addEventListener("mousedown", handleOutsideClick)
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick)
  //   }
  // }, [tabRef, activeTab])

  return (
    <FilterTabContainer isActive={checkIfActive(filterType)} ref={tabRef}>
      {filterOptions[filterType] &&
        filterOptions[filterType].map((filter: IFilter) => (
          <FilterCheckbox filterName={filter.name} />
        ))}
    </FilterTabContainer>
  )
}

export default FilterTab
