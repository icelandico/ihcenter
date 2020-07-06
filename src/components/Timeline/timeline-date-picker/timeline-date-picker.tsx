import * as React from "react"
import { inject, observer } from "mobx-react"
import {
  ArrowLeft,
  ArrowRight, TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"

interface Props {}

const TimelineDatePicker: React.FC<Props> = props => {
  return (
    <TimelineDateContainer>
      <ArrowLeft />
        <TimelineDate>1845</TimelineDate>
      <ArrowRight />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
