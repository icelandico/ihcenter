import * as React from "react"
import { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import { getYear } from "../../utils/formatDate"
import { ArticleModel } from "../../store/models/article"
import { rootStore } from "../../store/RootStore"
import {
  EventCardContainer,
  EventCardContent,
  EventCardClose,
  EventCardOpener
} from "./event-card-styles"

interface Props {
  store?: typeof rootStore
}

const EventCard: React.FC<Props> = props => {
  const [isOpened, setOpen] = useState(false)

  const getCurrentYearArticles = () => {
    const { articleStore } = props.store
    const currentYearArticles = articleStore.articles.filter(
      (article: ArticleModel) =>
        getYear(article.startDate) === articleStore.currentYear
    )
    return currentYearArticles
  }

  useEffect(() => {
    getCurrentYearArticles()
  })

  return (
    <>
      <EventCardOpener opened={isOpened} onClick={() => setOpen(true)} />
      <EventCardContainer opened={isOpened}>
        <EventCardClose onClick={() => setOpen(false)} />
        <EventCardContent />
      </EventCardContainer>
    </>
  )
}

export default inject("store")(observer(EventCard))
