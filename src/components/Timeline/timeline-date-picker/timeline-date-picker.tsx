import React from "react"
import { inject, observer } from "mobx-react"
import {
  TimeArrow,
  TimeArrowDouble,
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
      <TimeArrowDouble
        direction="left"
        onClick={() => store.articleStore.decrementYear()}
      />
      <TimeArrow direction="left" onClick={() => store.articleStore.decrementYear()} />
      <TimelineDate
        min="1790"
        onChange={e => store.articleStore.setYear(e.target.value)}
        value={currentYear}
      />
      <TimeArrow direction="right" onClick={() => store.articleStore.incrementYear()} />
      <TimeArrowDouble direction="right" onClick={() => store.articleStore.decrementYear()} />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
