import React from "react"
import { inject, observer } from "mobx-react"
import {
  ArrowLeft,
  ArrowRight,
  TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"
import { rootStore } from "../../../store/RootStore"

interface Props {
  store?: typeof rootStore
  currentYear: number
}

const TimelineDatePicker: React.FC<Props> = props => {
  const { store, currentYear } = props

  return (
    <TimelineDateContainer>
      <ArrowLeft onClick={() => store.articleStore.decrementYear()} />
      <TimelineDate
        min="1790"
        onChange={e => store.articleStore.setYear(e.target.value)}
        value={currentYear}
      />
      <ArrowRight onClick={() => store.articleStore.incrementYear()} />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
