import React, { FunctionComponent } from "react"
import { FilterBoxContainer } from "./filter-box-styles"
import { ReactComponent as FlagIcon } from "../../../static/flags/Default.svg"
import { ReactComponent as CurrentIcon } from "../../../static/icons/current.svg"
import { ReactComponent as FieldsIcon } from "../../../static/icons/fields.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"

interface IProps {
  filterType: string
  clickHandler: Function
  isActive: boolean
}

const FilterBox: FunctionComponent<IProps> = props => {
  const { filterType, clickHandler, isActive } = props

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

  return (
    <FilterBoxContainer onClick={() => clickHandler()} isActive={isActive}>
      <SvgIcon Icon={renderIcon(filterType)} />
    </FilterBoxContainer>
  )
}

export default FilterBox
