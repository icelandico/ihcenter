import React, { FunctionComponent, useState, useEffect, useRef } from "react"
import { observer, inject } from "mobx-react"
import { FilterTabContainer } from "./filter-tab-styles"
import { apiEndpoints } from "../../../store/api/api"
import FilterCheckbox from "../filter-checkbox/filter-checkbox"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"
import Loader from "../../shared/Loader/loader"
import { rootStore } from "../../../store/RootStore"
import { FilterModel } from "../../../store/models/filterModel"

interface IProps {
  filterType: string
  activeTab: string
  checkboxSet: string[]
  outsideClick: Function
  store?: typeof rootStore
}

interface IFilter {
  name: string
  id: number
  type: string
}

const FilterTab: FunctionComponent<IProps> = props => {
  const { filterType, activeTab } = props
  const [filterOptions, setFilterOptions] = useState<any>({})
  const tabRef = useRef(null)

  const chooseFiltersUrl = (type: string) => {
    switch (type) {
      case "mainideas":
        return apiEndpoints.getMainIdeas
      case "professions":
        return apiEndpoints.getProfessions
      default:
        return apiEndpoints.getNationalities
    }
  }

  const fetchFilters = async (type: string) => {
    const fetchApi = await fetch(chooseFiltersUrl(type))
    const results = await fetchApi.json()
    const typeOptions = await results.map((filter: IFilter) => ({
      name: filter.name,
      id: filter.id,
      type
    }))
    setFilterOptions({ ...filterOptions, [type]: typeOptions })
  }

  const checkIfActive = (filter: string): boolean => {
    return activeTab === filter
  }

  useEffect(() => {
    if (checkIfActive(filterType)) fetchFilters(filterType)
  }, [activeTab])

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
        filterOptions[filterType].map((filter: FilterModel) => (
          <FilterCheckbox filter={filter} isChecked={false} />
        ))}
      {!filterOptions[filterType] && <Loader />}
      {tabRef.current && <ScrollIndicator container={tabRef.current} />}
    </FilterTabContainer>
  )
}

export default inject("store")(observer(FilterTab))
