import * as React from "react"
import { useState } from "react"
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

export default EventCard
