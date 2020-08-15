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
  range: number
  width: number
}

const TimelineYearline: React.FC<Props> = props => {
  const yearRange = Array.from({ length: props.range }, (x, i) => i)
  return (
    <TimelineYearlineContainer>
      <ul style={{ width: `${props.width}px` }}>
        {yearRange.map(dot => {
          return (
            <TimelineDot>
              <span />
              {dot % 10 === 0 && <TimelineDate />}
            </TimelineDot>
          )
        })}
      </ul>
    </TimelineYearlineContainer>
  )
}

export default inject("store")(observer(TimelineYearline))
