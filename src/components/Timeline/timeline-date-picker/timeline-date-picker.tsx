import React, { useState } from "react"
import { inject, observer } from "mobx-react"
import {
  ArrowLeft,
  ArrowRight, TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"

interface Props {}

const TimelineDatePicker: React.FC<Props> = props => {
  const [currentYear, setYear] = useState(1845)

  return (
    <TimelineDateContainer>
      <ArrowLeft onClick={() => setYear(currentYear - 1)} />
      <TimelineDate>{currentYear}</TimelineDate>
      <ArrowRight onClick={() => setYear(currentYear + 1)} />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
