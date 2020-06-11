import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import DetailListInfo from "./details-list-info/details-list-info"
import DetailMainInfo from "./details-main-info/details-main-info"

export interface Props {
  store?: typeof rootStore
}

const DetailPanel: React.FC<Props> = props => {
  const { store } = props
  const details = store.articleStore.chosenArticle
  console.log("Details", details)
  return (
    <div className="content-main">
      <DetailListInfo details={details} />
      <DetailMainInfo details={details} />
    </div>
  )
}

export default inject("store")(observer(DetailPanel))
