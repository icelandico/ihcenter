import * as React from "react"
import { rootStore } from "../../store/RootStore"
import { EventCardContainer, EventCardContent, EventCardClose } from "./event-card-styles"

interface Props {
  store?: typeof rootStore
}

const EventCard: React.FC<Props> = props => {
  return (
    <EventCardContainer>
      <EventCardClose />
      <EventCardContent />
    </EventCardContainer>
  )
}

export default EventCard
