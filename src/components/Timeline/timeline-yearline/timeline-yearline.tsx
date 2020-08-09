import React from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineDot,
  TimelineYearlineContainer
} from "./timeline-yearline-styles"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
}

const TimelineYearline: React.FC<Props> = props => {
  // const yearRange
  const yearRange = Array.from({ length: 100 }, (x, i) => i)
  return (
    <TimelineYearlineContainer>
      <ul>
        {yearRange.map(dot => {
          return (
            <TimelineDot>
              <span />
            </TimelineDot>
          )
        })}
      </ul>
    </TimelineYearlineContainer>
  )
}

export default inject("store")(observer(TimelineYearline))
