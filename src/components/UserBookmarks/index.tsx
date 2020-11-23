import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import {
  UserBookmarksContainer,
  RecentItem,
  UserRecentlyViewedItems,
  UserBookmarksItems,
  UserBookmarksText,
  OptionsText
} from "./index-styles"

export interface IProps {
  store?: typeof rootStore
}

const UserBookmarks: React.FC<IProps> = props => {
  const { store } = props

  return (
    <UserBookmarksContainer>
      <UserBookmarksText>
        <OptionsText>RECENT:</OptionsText>
        <OptionsText>BOOKMARKS:</OptionsText>
      </UserBookmarksText>
      <UserRecentlyViewedItems>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
          return <RecentItem />
        })}
      </UserRecentlyViewedItems>
      <UserBookmarksItems />
    </UserBookmarksContainer>
  )
}

export default inject("store")(observer(UserBookmarks))
