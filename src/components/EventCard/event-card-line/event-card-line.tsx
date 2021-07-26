import React, { FunctionComponent } from "react"
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

const chooseIcon = (type: string):FunctionComponent<React.SVGProps<SVGSVGElement>> => {
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

const EventCardLine: FunctionComponent<Props> = ({ name, type }) => {
  return (
    <EventCardLineC>
      <SvgIcon Icon={chooseIcon(type)} />
      <p>
        {name} {choosePhrase(type)}
      </p>
    </EventCardLineC>
  )
}

export default EventCardLine
