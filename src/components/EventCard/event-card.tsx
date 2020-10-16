import * as React from "react"
import { useEffect, useState } from "react"
import { rootStore } from "../../store/RootStore"
import {
  EventCardContainer,
  EventCardContent,
  EventCardClose
} from "./event-card-styles"

interface Props {
  store?: typeof rootStore
}

const EventCard: React.FC<Props> = props => {
  const [isOpened, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setTimeout(() => setOpen(true), 2000)
  }, [])

  return (
    <EventCardContainer opened={isOpened}>
      <EventCardClose onClick={e => handleClose()} />
      <EventCardContent />
    </EventCardContainer>
  )
}

export default EventCard
