import * as React from "react"
import { EventCardLineC } from "./event-card-line-styles"
import { ReactComponent as PersonIcon } from "../../../static/icons/person.svg"
import { ReactComponent as EventIcon } from "../../../static/icons/events.svg"
import { ReactComponent as OrganisationIcon } from "../../../static/icons/politics.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"

interface Props {
  type: string
  name: string
}

const choosePhrase = (type: string): string => {
  switch (type) {
    case "person":
      return "is born"
    case "event":
      return "started"
    case "organisation":
      return "was founded"
    case "literature":
      return "is written"
    default:
      return "oops! it happened."
  }
}

const chooseIcon = (
  type: string
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
  switch (type) {
    case "person":
      return PersonIcon
    case "organisation":
      return OrganisationIcon
    case "event":
      return EventIcon
    default:
      return PersonIcon
  }
}

const EventCardLine: React.FC<Props> = props => {
  const { name, type } = props
  return (
    <EventCardLineC>
      <SvgIcon Icon={chooseIcon(type)} />
      <span>
        {name} {choosePhrase(type)}
      </span>
    </EventCardLineC>
  )
}

export default EventCardLine
