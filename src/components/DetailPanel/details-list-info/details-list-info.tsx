import * as React from "react"
import { observer, inject } from "mobx-react"
import { useRef } from "react"
import { rootStore } from "../../../store/RootStore"
import { ArticleModel } from "../../../store/models/article"
import { TabGenerator } from "../details-info-tab/details-info-tab-specific"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"
import { DetailsContainer, BottomGradient } from "./details-list-info-styles"

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
  const scrollDiv = useRef(null)
  const { details } = props
  return (
    <div className="content-list-info content-list-info-detailed">
      <DetailsContainer ref={scrollDiv}>
        {details && renderTypeDetails(details)}
        {scrollDiv.current && <ScrollIndicator container={scrollDiv.current} />}
      </DetailsContainer>
      <BottomGradient />
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
