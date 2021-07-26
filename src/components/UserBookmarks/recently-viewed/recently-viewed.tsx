import React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { UserStorageItem } from "../index-styles"
import { ArticleModel } from "../../../store/models/article"
import { IUserBookmark } from "../../../store/models/articleDetails"
import { renderImage } from "../../../utils/renderImage"
import { generateUuid } from "../../../utils/generateUuid"

export interface IProps {
  store?: typeof rootStore
  itemsThreshold: number
}

const RecentlyViewed: React.FC<IProps> = ({ store, itemsThreshold }) => {
  const { recentlyViewed } = store.articleStore
  const areArticlesSet = store.articleStore.articles.length > 0
  const [recentItems, setRecentItems] = useState([])

  useEffect(() => {
    setRecentItems(recentlyViewed)
  }, [areArticlesSet])

  const getArticlesFromRecentlyViewed = () => {
    const recentItemsId = recentItems.map(
      recentItem => Object.values(recentItem)[0]
    )
    const recentViewedItems = recentItemsId.map(recentItem =>
      store.articleStore.articles.find(
        article => article.identifier === recentItem
      )
    )
    return recentViewedItems.length > itemsThreshold
      ? recentViewedItems.slice(recentViewedItems.length - itemsThreshold)
      : recentViewedItems
  }

  const renderRecentViewedItems = () => {
    const articles = getArticlesFromRecentlyViewed()
    if (!areArticlesSet) {
      return recentItems
        .slice(0, itemsThreshold)
        .map((bookmark: IUserBookmark) => (
          <UserStorageItem key={`${bookmark.id}-${generateUuid()}`} />
        ))
    }
    return articles.map((bookmark: ArticleModel) => (
      <UserStorageItem
        isActive
        key={`${bookmark.identifier}-${bookmark.type}`}
        style={{ backgroundImage: `url(${renderImage(bookmark)}` }}
        onClick={() => rootStore.articleStore.toggle(bookmark.identifier)}
        title={bookmark.name}
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
