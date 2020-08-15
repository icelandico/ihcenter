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
import { getYear } from "../../utils/formatDate"

interface Props {
  store?: typeof rootStore
}

interface YearsData {
  year: number
  isData: boolean
}

const Timeline: React.FC<Props> = props => {
  const { store } = props
  const { currentYear } = store.articleStore
  const yearRange = store.articleStore.lastYear - store.articleStore.firstYear

  const calculateTimelineWidth = (): number => {
    return yearRange * 16
  }

  const generateYearsData = (): YearsData[] | any => {
    const { firstYear } = store.articleStore
    const { lastYear } = store.articleStore
    const range = (start: number, end: number): number[] => {
      if (start === end) return [start]
      return [start, ...range(start + 1, end)]
    }
    const yearsWithData = Array.from(
      new Set(store.articleStore.articles.map(el => getYear(el.startDate)))
    )
    const yearsRange = range(firstYear, lastYear)
    const yearsDataArray = yearsRange.map(yearElement => ({
      year: yearElement,
      isData: yearsWithData.includes(yearElement)
    }))
    return yearsDataArray
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
          timelineData={generateYearsData()}
          timelineWidth={calculateTimelineWidth()}
        />
        <TimelineDatePicker currentYear={currentYear} />
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
