import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { CharacterTypes } from "../../../types/models-types"

export interface Props {
  store?: typeof rootStore
  details: CharacterTypes
}

export interface State { }

const DetailListInfo = (props: Props) => {
  return <div className="content-list-info" />
}

export default inject("store")(observer(DetailListInfo))
