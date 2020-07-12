import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { ArticleModel } from "../../../store/models/article"
import { TabGenerator } from "../details-info-tab/details-info-tab-specific"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"

export interface Props {
  store?: typeof rootStore
  details: ArticleModel
}

const renderTypeDetails = (details: ArticleModel): JSX.Element => {
  const tabGenerator = new TabGenerator(details)
  const { type } = details
  switch (type) {
    case "person":
      return tabGenerator.renderPerson()
    case "event":
      return tabGenerator.renderEvent()
    case "organisation":
      return tabGenerator.renderOrganisation()
    default:
      return tabGenerator.renderPerson()
  }
}

const DetailListInfo: React.FC<Props> = props => {
  const { details } = props
  return (
    <div className="content-list-info content-list-info-detailed">
      {details && renderTypeDetails(details)}
      <ScrollIndicator />
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
