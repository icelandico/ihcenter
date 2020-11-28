import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react";
import { rootStore } from "../../../store/RootStore"
import { RecentItem } from "../index-styles"

export interface IProps {
  store?: typeof rootStore
}

const BookmarksItems: React.FC<IProps> = props => {
  const userBookmarks = props.store.articleStore.userBookmarks
  const initialItems = () =>
    JSON.parse(window.localStorage.getItem("userBookmarks"))
  const [bookmarks, setBookmarks] = useState(initialItems)

  useEffect(() => {
    setBookmarks(userBookmarks)
    console.log(userBookmarks)
  })

  return (
    <>
      {bookmarks.map((bookmark: any) => {
        return <RecentItem />
      })}
    </>
  )
}

export default inject("store")(observer(BookmarksItems))
