import React, { FunctionComponent } from "react"
import {
  FilterCross,
  FilterLine,
  FilterContainer,
  FilterIconBox,
} from "./filter-box-styles"
import { ReactComponent as FlagIcon } from "../../../static/icons/flag.svg"
import { ReactComponent as CurrentIcon } from "../../../static/icons/current.svg"
import { ReactComponent as FieldsIcon } from "../../../static/icons/fields.svg"
import { ReactComponent as CharacterIcon } from "../../../static/icons/person.svg"
import { ReactComponent as EventIcon } from "../../../static/icons/events.svg"
import { ReactComponent as WritingIcon } from "../../../static/icons/text.svg"
import { ReactComponent as OrganisationIcon } from "../../../static/icons/politics.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"

interface IProps {
  filterType: string
  clickHandler: () => void
  isActive: boolean
  noCross?: boolean
}

const FilterBox: FunctionComponent<IProps> = ({
  filterType,
  clickHandler,
  isActive,
  noCross
}) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "mainideas":
        return CurrentIcon
      case "professions":
        return FieldsIcon
      case "person":
        return CharacterIcon
      case "event":
        return EventIcon
      case "writing":
        return WritingIcon
      case "organisation":
        return OrganisationIcon
      default:
        return FlagIcon
    }
  }

  return (
    <FilterContainer onClick={() => clickHandler()}>
      <FilterIconBox>
        <SvgIcon Icon={renderIcon(filterType)} />
      </FilterIconBox>
      {noCross ? (
        <FilterLine isActive={isActive} />
      ) : (
        <FilterCross isActive={isActive} />
      )}
    </FilterContainer>
  )
}

export default FilterBox
