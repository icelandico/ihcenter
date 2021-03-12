import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import { FinderInput } from "./finder-styles"

interface Props {
  store?: typeof rootStore
}

const Finder: FunctionComponent<Props> = props => {
  return <FinderInput type="text" placeholder="Search" />
}

export default Finder
