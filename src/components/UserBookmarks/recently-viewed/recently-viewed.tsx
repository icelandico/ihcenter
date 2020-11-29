import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { UserStorageItem } from "../index-styles"
import { ArticleModel } from "../../../store/models/article"
import { apiUrls } from "../../../store/api/api"
import { IUserBookmark } from "../../../store/models/articleDetails"
import EventIcon from "../../../static/icons/events.svg"
import PoliticsIcon from "../../../static/icons/politics.svg"

export interface IProps {
  store?: typeof rootStore
}

const RecentlyViewed: React.FC<IProps> = props => {
  const { recentlyViewed } = props.store.articleStore
  const areArticlesSet = props.store.articleStore.articles.length > 0
  const [recentItems, setRecentItems] = useState([])

  useEffect(() => {
    setRecentItems(recentlyViewed)
  }, [areArticlesSet])

  const getArticlesFromRecentlyViewed = () => {
    const recentItemsId = recentItems.map(
      recentItem => Object.values(recentItem)[0]
    )
    const recentViewedItems = recentItemsId.map(recentItem =>
      props.store.articleStore.articles.find(
        article => article.identifier === recentItem
      )
    )
    return recentViewedItems
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

  const renderRecentViewedItems = () => {
    const articles = getArticlesFromRecentlyViewed()
    if (!areArticlesSet) {
      return recentItems.map((bookmark: IUserBookmark, idx) => (
        <UserStorageItem key={`${bookmark.id}-${idx}`} data-not-active="true" />
      ))
    }
    return articles.map((bookmark: ArticleModel, idx) => (
      <UserStorageItem
        data-is-active="true"
        isActive
        key={`${bookmark.identifier}-${idx}`}
        style={{ backgroundImage: `url(${renderImage(bookmark)}` }}
        onClick={() => rootStore.articleStore.toggle(bookmark)}
      />
    ))
  }

  return (
    <>
      {recentItems.length ? (
        renderRecentViewedItems()
      ) : (
        <p>Place for recent viewed items</p>
      )}
    </>
  )
}

export default inject("store")(observer(RecentlyViewed))
