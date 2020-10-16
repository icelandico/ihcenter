import * as React from "react"
import { rootStore } from "../../store/RootStore"
import { EventCardContainer } from "./event-card-styles"

interface Props {
  store?: typeof rootStore
}

const EventCard: React.FC<Props> = props => {
  return (
    <EventCardContainer />
  )
}

export default EventCard
