import * as React from "react"
import { inject, observer } from "mobx-react"
import { createRef, useEffect, useState } from "react"
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
import { getYear } from "../../utils/formatDate"
import { range } from "../../utils/range"
import EventCard from "../EventCard/event-card"

interface Props {
  store?: typeof rootStore
}

const Timeline: React.FC<Props> = props => {
  const [yearsData, setData] = useState([])
  const { store } = props
  const { currentYear } = store.articleStore
  const yearRange = store.articleStore.lastYear - store.articleStore.firstYear
  const dotRef = createRef<HTMLDivElement>()

  const calculateTimelineWidth = (): number => {
    return (yearRange + 1) * 15
  }

  useEffect(() => {
    const { firstYear, lastYear } = store.articleStore
    const yearsWithData = Array.from(
      new Set(store.articleStore.articles.map(el => getYear(el.startDate)))
    )

    const yearsRange = range(firstYear, lastYear)
    const yearsDataArray = yearsRange.map(yearElement => ({
      year: yearElement,
      isData: yearsWithData.includes(yearElement)
    }))
    setData(yearsDataArray)
  }, [yearRange])

  return (
    <TimelineContainer>
      <TimelineMenu />
      <TimelineContent>
        <TimelineFrames>
          <EventCard />
          <TimelineFrameLeft />
          <TimelineFrameRight />
        </TimelineFrames>
        <TimelineYearline
          timelineData={yearsData}
          timelineWidth={calculateTimelineWidth()}
          innerRef={dotRef}
        />
        <TimelineDatePicker currentYear={currentYear} />
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
