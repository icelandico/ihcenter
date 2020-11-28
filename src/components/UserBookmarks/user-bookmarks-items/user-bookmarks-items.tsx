import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { RecentItem } from "../index-styles"
import { UserBookmarksPlaceholder } from "./user-bookmarks-items-styles"
import { IUserBookmark } from "../../../store/models/articleDetails"

export interface IProps {
  store?: typeof rootStore
}

const BookmarksItems: React.FC<IProps> = props => {
  const userBookmarks = props.store.articleStore.userBookmarks
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setBookmarks(userBookmarks)
  })

  const renderBookmarksItems = () => {
    return bookmarks.map((bookmark: IUserBookmark) => (
      <RecentItem key={bookmark.id} />
    ))
  }

  return (
    <>
      {bookmarks.length ? (
        renderBookmarksItems()
      ) : (
        <UserBookmarksPlaceholder>
          Place for your bookmarks
        </UserBookmarksPlaceholder>
      )}
    </>
  )
}

export default inject("store")(observer(BookmarksItems))
