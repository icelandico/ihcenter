import React, { useEffect, useRef, useState } from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineDate,
  TimelineDot,
  TimelineYearlineContainer
} from "./timeline-yearline-styles"
import { rootStore } from "../../../store/RootStore"
import { range } from "../../../utils/range"

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

const usePrevious = (value: any): number => {
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
  // const [scrollPos, setScrollPos] = useState(0)

  const containerRef = useRef(null)
  const previousVal = usePrevious(currentYear)

  const getDotWidth = (): number => {
    return timelineWidth / timelineData.length
  }

  const handleTimelinePosition = () => {
    const difference = Math.abs(previousVal - currentYear) * getDotWidth()
    if (previousVal > currentYear) {
      setTimelineVal(timelineVal + difference)
    } else {
      setTimelineVal(timelineVal - difference)
    }
  }

  useEffect(() => {
    const initialValue =
      timelineWidth -
      containerRef.current.clientWidth / 2 -
      Math.ceil(getDotWidth() / 2)
    setTimelineVal(-Math.abs(initialValue))
  }, [timelineData])

  useEffect(() => {
    // console.log(props.store.articleStore.articles)
    handleTimelinePosition()
    getHideRange()
  }, [currentYear])

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY === 100 || e.deltaY === 3)
        props.store.articleStore.incrementYear()
      if (e.deltaY === -100 || e.deltaY === -3)
        props.store.articleStore.decrementYear()
    }

    containerRef.current.addEventListener("wheel", (e: WheelEvent) =>
      handleScroll(e)
    )

    return () => containerRef.current.removeEventListener("wheel", handleScroll)
  }, [])

  const getHideRange = (): number[] => {
    const start = currentYear - 4
    const end = currentYear + 4
    return range(start, end)
  }

  return (
    <TimelineYearlineContainer ref={containerRef} translateVal={timelineVal}>
      <ul style={{ width: `${timelineWidth}px` }}>
        {timelineData.map(dot => {
          const { year, isData } = dot
          return (
            <TimelineDot
              isData={isData}
              onClick={() => props.store.articleStore.setYear(year)}
            >
              <span />
              {year % 10 === 0 && (
                <TimelineDate isHidden={getHideRange().includes(year)}>
                  {year}
                </TimelineDate>
              )}
            </TimelineDot>
          )
        })}
      </ul>
    </TimelineYearlineContainer>
  )
}

export default inject("store")(observer(TimelineYearline))
