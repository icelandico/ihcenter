import { ArticleModel } from "../store/models/article"
import { apiUrls } from "../store/api/api"
import EventIcon from "../static/icons/events.svg"
import PoliticsIcon from "../static/icons/politics.svg"

export const renderImage = (details: ArticleModel): string => {
  if (details && details.image) {
    return `${apiUrls.baseUrl}${details.image.url}`
  }
  const { type } = details
  switch (type) {
    case "person":
      return `${apiUrls.baseUrl}${details.image.url}`
    case "event":
      return EventIcon
    case "organisation":
      return PoliticsIcon
    default:
      return ""
  }
}
