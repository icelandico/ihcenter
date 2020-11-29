import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import {
  UserBookmarksContainer,
  UserStorageItem,
  UserRecentlyViewedItems,
  UserBookmarksText,
  OptionsText,
  UserBookmarksItems
} from "./index-styles"
import BookmarksItems from "./user-bookmarks-items/bookmarks-items"
import RecentlyViewed from "./recently-viewed/recently-viewed"

export interface IProps {
  store?: typeof rootStore
}

const UserBookmarks: React.FC<IProps> = props => {
  return (
    <UserBookmarksContainer>
      <UserBookmarksText>
        <OptionsText>RECENT:</OptionsText>
        <OptionsText>BOOKMARKS:</OptionsText>
      </UserBookmarksText>
      <UserRecentlyViewedItems>
        <RecentlyViewed />
      </UserRecentlyViewedItems>
      <UserBookmarksItems>
        <BookmarksItems />
      </UserBookmarksItems>
    </UserBookmarksContainer>
  )
}

export default inject("store")(observer(UserBookmarks))
