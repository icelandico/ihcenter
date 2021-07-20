import { ReactComponent as PersonIcon } from "../static/icons/person.svg"
import { ReactComponent as OrganisationIcon } from "../static/icons/politics.svg"
import { ReactComponent as EventIcon } from "../static/icons/events.svg"

export const chooseIcon = (iconType: string) => {
  switch (iconType) {
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
