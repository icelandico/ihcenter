import { colors } from "../styles/colors"

export const chooseColor = (type: string) => {
  switch (type) {
    case "person":
      return colors.lightBrown
    case "event":
      return colors.purple
    case "organisation":
      return colors.regularRed
    default:
      return colors.lightBrown
  }
}