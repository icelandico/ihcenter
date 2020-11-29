import * as React from "react"
import { observer, inject } from "mobx-react"
import {useEffect, useRef, useState} from "react"
import { rootStore } from "../../store/RootStore"
import {
  UserBookmarksContainer,
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
  const recentlyViewedRef = useRef(null)
  const [maxItems, setMaxItems] = useState(0)

  useEffect(() => {
    if (recentlyViewedRef.current) {
      setMaxItems(Math.ceil(recentlyViewedRef.current.offsetWidth / 25))
    }
  }, [])

  return (
    <UserBookmarksContainer>
      <UserBookmarksText>
        <OptionsText>RECENT:</OptionsText>
        <OptionsText>BOOKMARKS:</OptionsText>
      </UserBookmarksText>
      <UserRecentlyViewedItems ref={recentlyViewedRef}>
        <RecentlyViewed itemsThreshold={maxItems} />
      </UserRecentlyViewedItems>
      <UserBookmarksItems>
        <BookmarksItems itemsThreshold={maxItems} />
      </UserBookmarksItems>
    </UserBookmarksContainer>
  )
}

export default inject("store")(observer(UserBookmarks))
