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
import { rootStore } from "../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const Timeline: React.FC<Props> = props => {
  const { store } = props
  const currentYear = store.articleStore.currentYear

  return (
    <TimelineContainer>
      <TimelineMenu />
      <TimelineContent>
        <TimelineFrames>
          <TimelineFrameLeft />
          <TimelineFrameRight />
        </TimelineFrames>
        <TimelineYearLine />
        <TimelineDatePicker currentYear={currentYear} />
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
