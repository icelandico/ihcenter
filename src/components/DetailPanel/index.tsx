import React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import DetailListInfo from "./details-list-info/details-list-info"
import DetailMainInfo from "./details-main-info/details-main-info"
import { DetailsMainContainer } from "./index-styles"

export interface IProps {
  store?: typeof rootStore
}

const DetailPanel: React.FC<IProps> = props => {
  const { store } = props
  const details = store.articleStore.chosenArticle
  return (
    <DetailsMainContainer>
      <DetailListInfo details={details} />
      <DetailMainInfo details={details} />
    </DetailsMainContainer>
  )
}

export default inject("store")(observer(DetailPanel))
