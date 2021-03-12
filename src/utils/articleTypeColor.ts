import { colors } from "../styles/colors"

export const chooseColor = (type: string) => {
  switch (type) {
    case "person":
      return colors.white
    case "event":
      return colors.purple
    case "organisation":
      return colors.regularRed
    case "writings":
      return colors.green
    default:
      return colors.lightBrown
  }
}
