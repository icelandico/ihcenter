import React, { useEffect, useRef, useState } from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineDate,
  TimelineDot,
  TimelineYearlineContainer
} from "./timeline-yearline-styles"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
  timelineData: []
  timelineWidth: number
}

const TimelineYearline: React.FC<Props> = props => {
  const { timelineData, timelineWidth } = props
  const [dotWidth, setDotWidth] = useState(0)
  const dotElement = useRef(null)

  useEffect(() => {
    if (dotElement) {
      const dotWidth =
        dotElement.current &&
        dotElement.current.offsetWidth +
          parseInt(
            window
              .getComputedStyle(dotElement.current)
              .getPropertyValue("margin-left"),
            10
          ) +
          parseInt(
            window
              .getComputedStyle(dotElement.current)
              .getPropertyValue("margin-right"),
            10
          )
      setDotWidth(dotWidth)
    }
  })
  return (
    <TimelineYearlineContainer>
      <ul style={{ width: `${timelineWidth}px` }}>
        {timelineData.map(dot => {
          const { year, isData } = dot
          return (
            <TimelineDot isData={isData} ref={dotElement}>
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
