import * as React from "react"
import {useEffect, useRef, useState} from "react"
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
import EventCardLine from "./event-card-line/event-card-line"
import { ScrollIndicator } from "../shared/ScrollIndicator/scroll-indicator";

interface IProps {
  store?: typeof rootStore
}

const EventCard: React.FC<IProps> = props => {
  const [isOpened, setOpen] = useState(false)
  const [yearEvents, setYearEvents] = useState([])
  const scrollDiv = useRef(null)

  const getCurrentYearArticles = () => {
    const { articleStore } = props.store
    const currentYearArticles = articleStore.articles.filter(
      (article: ArticleModel) =>
        getYear(article.startDate) === articleStore.currentYear
    )
    setYearEvents(currentYearArticles)
  }

  useEffect(() => {
    getCurrentYearArticles()
  }, [props.store.articleStore.currentYear])

  return (
    <>
      <EventCardOpener opened={isOpened} onClick={() => setOpen(true)} />
      <EventCardContainer opened={isOpened}>
        <EventCardClose onClick={() => setOpen(false)} />
        <EventCardContent ref={scrollDiv}>
          {yearEvents.map(event => (
            <EventCardLine type={event.type} name={event.name} key={event.id} />
          ))}
          {isOpened && (
            <ScrollIndicator
              options={{ position: "right" }}
              container={scrollDiv.current}
            />
          )}
        </EventCardContent>
      </EventCardContainer>
    </>
  )
}

export default inject("store")(observer(EventCard))
