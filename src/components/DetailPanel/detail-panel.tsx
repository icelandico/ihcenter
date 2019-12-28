import * as React from "react"
import { observer, inject } from "mobx-react"
import { CharacterTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import DetailListInfo from "./details-list-info/details-list-info"
import DetailMainInfo from "./details-main-info/details-main-info"

export interface Props {
  store?: typeof rootStore
}

export interface State { }

const DetailPanel = (props: Props) => {
  const details = props.store.characterStore.chosenCharacter
  return (
    <div className="content-main">
      <DetailListInfo details={details} />
      <DetailMainInfo details={details} />
    </div>
  )
}

export default inject("store")(observer(DetailPanel))
