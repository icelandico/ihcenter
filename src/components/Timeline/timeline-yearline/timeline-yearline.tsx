import React from "react"
import { inject, observer } from "mobx-react"
import {
  TimelineDot,
  TimelineYearlineContainer
} from "./timeline-yearline-styles"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
  range: number
}

const TimelineYearline: React.FC<Props> = props => {
  const yearRange = Array.from({ length: props.range }, (x, i) => i)
  console.log(yearRange)
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
