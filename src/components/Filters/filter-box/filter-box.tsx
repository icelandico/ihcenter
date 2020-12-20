import React, { FunctionComponent } from "react"
import { FilterBoxContainer } from "./filter-box-styles"
import { ReactComponent as FlagIcon } from "../../../static/flags/Default.svg"
import { ReactComponent as CurrentIcon } from "../../../static/icons/current.svg"
import { ReactComponent as FieldsIcon } from "../../../static/icons/fields.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import FilterTab from "../filterTab/filter-tab"

interface IProps {
  filterType: string
  clickHandler: Function
  activeTab: string
}

const FilterBox: FunctionComponent<IProps> = props => {
  const { filterType, clickHandler, activeTab } = props

  const renderIcon = (type: string) => {
    switch (type) {
      case "current":
        return CurrentIcon
      case "fields":
        return FieldsIcon
      default:
        return FlagIcon
    }
  }

  const checkIfActive = (activeTab: string): boolean => {
    return activeTab === filterType
  }

  return (
    <FilterBoxContainer onClick={() => clickHandler()}>
      <SvgIcon Icon={renderIcon(filterType)} />
      <FilterTab filterType={filterType} isActive={checkIfActive(activeTab)} />
    </FilterBoxContainer>
  )
}

export default FilterBox
