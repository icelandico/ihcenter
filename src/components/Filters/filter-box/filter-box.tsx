import React, { FunctionComponent } from "react"
import {
  FilterCross,
  FilterContainer,
  FilterIconBox
} from "./filter-box-styles"
import { ReactComponent as FlagIcon } from "../../../static/icons/flag.svg"
import { ReactComponent as CurrentIcon } from "../../../static/icons/current.svg"
import { ReactComponent as FieldsIcon } from "../../../static/icons/fields.svg"
import { ReactComponent as CharacterIcon } from "../../../static/icons/person.svg"
import { ReactComponent as EventIcon } from "../../../static/icons/events.svg"
import { ReactComponent as WritingIcon } from "../../../static/icons/text.svg"
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
      case "mainideas":
        return CurrentIcon
      case "professions":
        return FieldsIcon
      case "character":
        return CharacterIcon
      case "event":
        return EventIcon
      case "writing":
        return WritingIcon
      default:
        return FlagIcon
    }
  }

  return (
    <FilterContainer onClick={() => clickHandler()}>
      <FilterIconBox>
        <SvgIcon Icon={renderIcon(filterType)} />
      </FilterIconBox>
      <FilterCross isActive={isActive} />
    </FilterContainer>
  )
}

export default FilterBox
