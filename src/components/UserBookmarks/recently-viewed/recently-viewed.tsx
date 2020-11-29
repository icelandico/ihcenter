import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { UserStorageItem } from "../index-styles"
import { ArticleModel } from "../../../store/models/article"
import { IUserBookmark } from "../../../store/models/articleDetails"
import { renderImage } from "../../../utils/renderImage"

export interface IProps {
  store?: typeof rootStore
  itemsThreshold: number
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
    return recentViewedItems.length > props.itemsThreshold
      ? recentViewedItems.slice(recentViewedItems.length - props.itemsThreshold)
      : recentViewedItems
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
