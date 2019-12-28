import * as React from "react"
import { observer, inject } from "mobx-react"

export interface Props {
  store?: typeof rootStore
}

export interface State { }

const DetailMainInfo = () => {
  return (
    <div className="content-list-info">
    </div>
  )
}

export default inject("store")(observer(DetailMainInfo))
