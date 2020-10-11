import React, { useEffect, useRef, useState } from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineDate,
  TimelineDot,
  TimelineYearlineContainer
} from "./timeline-yearline-styles"
import { rootStore } from "../../../store/RootStore"

interface YearsData {
  year: number
  isData: boolean
}

interface Props {
  store?: typeof rootStore
  timelineData: YearsData[]
  timelineWidth: number
  innerRef: any
}

function usePrevious(value: any): number {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const TimelineYearline: React.FC<Props> = props => {
  const { timelineData, timelineWidth } = props
  const { currentYear } = props.store.articleStore
  const [timelineVal, setTimelineVal] = useState(0)

  // const dotElement = useRef(null)
  const containerRef = useRef(null)
  const previousVal = usePrevious(currentYear)

  const getDotWidth = (): number => {
    return timelineWidth / timelineData.length
  }

  const handleTimelinePosition = () => {
    const difference = Math.abs(previousVal - currentYear) * getDotWidth()
    setTimelineVal(timelineVal - difference)
  }

  const setInitial = () => {
    const initialValue = timelineWidth - (containerRef.current.clientWidth / 2) - Math.ceil(getDotWidth() / 2)
    setTimelineVal(initialValue)
  }

  useEffect(() => {
    setInitial()
  }, [timelineData])

  useEffect(() => {
    handleTimelinePosition()
  }, [currentYear])

  return (
    <TimelineYearlineContainer
      ref={containerRef}
      translateVal={timelineVal}
    >
      <ul style={{ width: `${timelineWidth}px` }}>
        {timelineData.map(dot => {
          const { year, isData } = dot
          return (
            <TimelineDot isData={isData}>
              <span />
              {year % 10 === 0 && <TimelineDate>{year}</TimelineDate>}
            </TimelineDot>
          )
        })}
      </ul>
    </TimelineYearlineContainer>
  )
}

export default inject("store")(observer(TimelineYearline))
