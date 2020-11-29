import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { UserStorageItem } from "../index-styles"
import { UserBookmarksPlaceholder } from "./bookmarks-items-styles"
import { ArticleModel } from "../../../store/models/article"
import { apiUrls } from "../../../store/api/api"
import EventIcon from "../../../static/icons/events.svg"
import PoliticsIcon from "../../../static/icons/politics.svg"
import { IUserBookmark } from "../../../store/models/articleDetails";

export interface IProps {
  store?: typeof rootStore
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
    return bookmarkedArticles
  }

  const renderImage = (details: ArticleModel): string => {
    if (details && details.image) {
      return `${apiUrls.baseUrl}${details.image.url}`
    }
    const { type } = details
    switch (type) {
      case "person":
        return `${apiUrls.baseUrl}${details.image.url}`
      case "event":
        return EventIcon
      case "organisation":
        return PoliticsIcon
      default:
        return ""
    }
  }

  const renderBookmarksItems = () => {
    const articles = getArticlesFromBookmarks()
    if (!areArticlesSet) {
      return bookmarks.map((bookmark: IUserBookmark, idx) => (
        <UserStorageItem key={`${bookmark.id}-${idx}`} />
      ))
    }
    return articles.map((bookmark: ArticleModel) => (
      <UserStorageItem
        isActive
        key={bookmark.id}
        style={{ backgroundImage: `url(${renderImage(bookmark)}` }}
        onClick={() => rootStore.articleStore.toggle(bookmark)}
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
