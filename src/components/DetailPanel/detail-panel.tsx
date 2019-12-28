import * as React from "react"
import { observer, inject } from "mobx-react"
import { CharacterTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"

export interface Props {
  store?: typeof rootStore
}

export interface State { }

const DetailPanel = () => {
  const { store } = this.props.store
  return (
    <div className="content-main">
      <div className="content-list-info" />
      <div className="content-main-info" />
    </div>
  )
}

export default inject("store")(observer(DetailPanel))
