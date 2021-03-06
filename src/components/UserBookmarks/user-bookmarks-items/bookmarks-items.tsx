import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { UserStorageItem } from "../index-styles"
import { UserBookmarksPlaceholder } from "./bookmarks-items-styles"
import { ArticleModel } from "../../../store/models/article"
import { IUserBookmark } from "../../../store/models/articleDetails"
import { renderImage } from "../../../utils/renderImage"

export interface IProps {
  store?: typeof rootStore
  itemsThreshold: number
}

const BookmarksItems: React.FC<IProps> = props => {
  const { userBookmarks } = props.store.articleStore
  const areArticlesSet = props.store.articleStore.articles.length > 0
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setBookmarks(userBookmarks)
  }, [areArticlesSet])

  const getArticlesFromBookmarks = () => {
    const bookmarksId = bookmarks.map(bookmark => Object.values(bookmark)[0])
    const bookmarkedArticles = props.store.articleStore.articles.filter(
      article => bookmarksId.includes(article.identifier)
    )
    return bookmarkedArticles.length > props.itemsThreshold
      ? bookmarkedArticles.slice(
          bookmarkedArticles.length - props.itemsThreshold
        )
      : bookmarkedArticles
  }

  const renderBookmarksItems = () => {
    const articles = getArticlesFromBookmarks()
    if (!areArticlesSet) {
      return bookmarks
        .slice(0, props.itemsThreshold)
        .map((bookmark: IUserBookmark, idx) => (
          <UserStorageItem key={`${bookmark.id}-${idx}`} />
        ))
    }
    return articles.map((bookmark: ArticleModel) => (
      <UserStorageItem
        isActive
        key={bookmark.id}
        style={{ backgroundImage: `url(${renderImage(bookmark)}` }}
        onClick={() => rootStore.articleStore.toggle(bookmark.identifier)}
        title={bookmark.name}
      />
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
