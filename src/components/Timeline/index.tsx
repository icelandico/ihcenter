import * as React from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineContainer,
  TimelineContent,
  TimelineFrames,
  TimelineFrameLeft,
  TimelineFrameRight
} from "./index-styles"
import TimelineDatePicker from "./timeline-date-picker/timeline-date-picker"
import TimelineYearline from "./timeline-yearline/timeline-yearline"
import TimelineMenu from "./timeline-menu/timeline-menu"
import { rootStore } from "../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const Timeline: React.FC<Props> = props => {
  const { store } = props
  const currentYear = store.articleStore.currentYear
  const yearRange = store.articleStore.lastYear - store.articleStore.firstYear

  const calculateTimelineWidth = (range: number): number => {
    return yearRange * 16
  }

  return (
    <TimelineContainer>
      <TimelineMenu />
      <TimelineContent>
        <TimelineFrames>
          <TimelineFrameLeft />
          <TimelineFrameRight />
        </TimelineFrames>
        <TimelineYearline
          range={yearRange}
          width={calculateTimelineWidth(yearRange)}
        />
        <TimelineDatePicker currentYear={currentYear} />
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
