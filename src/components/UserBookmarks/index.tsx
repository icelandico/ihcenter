import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import { UserBookmarksContainer } from "./index-styles"

export interface IProps {
  store?: typeof rootStore
}

const UserBookmarks: React.FC<IProps> = props => {
  const { store } = props

  return (
    <UserBookmarksContainer />
  )
}

export default inject("store")(observer(UserBookmarks))
