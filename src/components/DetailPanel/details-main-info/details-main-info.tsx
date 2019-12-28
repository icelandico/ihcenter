import * as React from "react"
import { observer, inject } from "mobx-react"
import { CharacterTypes } from "../../../types/models-types"
import { rootStore } from "../../../store/RootStore"

export interface Props {
  store?: typeof rootStore
  details: CharacterTypes
}

export interface State { }

const DetailMainInfo = (props: Props) => {
  const { details } = props
  return (
    <div className="content-list-info">
      <p>{details && details.fullName}</p>
    </div>
  )
}

export default inject("store")(observer(DetailMainInfo))
