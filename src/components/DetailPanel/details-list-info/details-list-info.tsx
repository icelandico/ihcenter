import React from "react"
import { observer, inject } from "mobx-react"
import { useRef } from "react"
import { ArticleModel } from "../../../store/models/article"
import DetailsInfoTabSpecific from "../details-info-tab/details-info-tab-specific"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"
import { DetailsContainer } from "./details-list-info-styles"

export interface Props {
  details: ArticleModel
}

const renderTypeDetails = (details: ArticleModel): JSX.Element => {
  const { type } = details
  return <DetailsInfoTabSpecific articleType={type} details={details} />
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
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
