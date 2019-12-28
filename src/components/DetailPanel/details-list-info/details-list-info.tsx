import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"


export interface Props {
  store?: typeof rootStore
}

export interface State { }

const DetailListInfo = () => {
  return (
    <div className="content-list-info"> 
    
      </div>
  )
}

export default inject("store")(observer(DetailListInfo))
