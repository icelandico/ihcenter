import React from "react"
import { inject, observer } from "mobx-react"
import {
  TimeArrow,
  TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"
import { rootStore } from "../../../store/RootStore"
import Loader from "../../shared/Loader/loader";

interface Props {
  store?: typeof rootStore
  currentYear: number
}

const TimelineDatePicker: React.FC<Props> = props => {
  const { store, currentYear } = props

  return (
    <TimelineDateContainer>
      <TimeArrow
        direction="left"
        double
        primary
        onClick={() => store.articleStore.decrementYear()}
      />
      <TimeArrow
        direction="left"
        onClick={() => store.articleStore.decrementYear()}
      />
      {/*<TimelineDate*/}
      {/*  min="1790"*/}
      {/*  onChange={e => store.articleStore.setYear(e.target.value)}*/}
      {/*  value={currentYear || ""}*/}
      {/*/>*/}
      {/*<Loader />*/}
      <TimeArrow
        direction="right"
        onClick={() => store.articleStore.incrementYear()}
      />
      <TimeArrow
        direction="right"
        double
        primary
        onClick={() => store.articleStore.decrementYear()}
      />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
