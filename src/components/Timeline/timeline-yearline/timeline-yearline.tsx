import React from "react"
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
  return (
    <TimelineYearlineContainer>
      <ul style={{ width: `${timelineWidth}px` }}>
        {timelineData.map(dot => {
          const { year } = dot
          return (
            <TimelineDot>
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
