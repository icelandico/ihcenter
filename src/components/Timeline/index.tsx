import * as React from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineContainer,
  TimelineMenu,
  TimelineContent,
  TimelineFrames,
  TimelineFrameLeft,
  TimelineFrameRight,
  TimelineYearLine
} from "./index-styles"
import TimelineDatePicker from "./timeline-date-picker/timeline-date-picker"

interface Props {}

const Timeline: React.FC<Props> = props => {
  return (
    <TimelineContainer>
      <TimelineMenu />
      <TimelineContent>
        <TimelineFrames>
          <TimelineFrameLeft />
          <TimelineFrameRight />
        </TimelineFrames>
        <TimelineYearLine />
        <TimelineDatePicker />
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
