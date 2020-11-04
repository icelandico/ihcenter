import React, { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import {
  TimeArrow,
  TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"
import { rootStore } from "../../../store/RootStore"
import Loader from "../../shared/Loader/loader"

interface Props {
  store?: typeof rootStore
  currentYear: number
}

const TimelineDatePicker: React.FC<Props> = props => {
  const { store, currentYear } = props
  const [value, setValue] = useState(currentYear)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(parseInt(value, 10))
    if (value.length >= 4) store.articleStore.setYear(parseInt(value, 10))
  }

  useEffect(() => {
    setValue(currentYear)
  }, [currentYear])

  return (
    <TimelineDateContainer>
      <TimeArrow
        direction="left"
        double
        primary
        onClick={() => store.articleStore.decrementYear()}
        title="Previous with data"
      />
      <TimeArrow
        direction="left"
        onClick={() => store.articleStore.decrementYear()}
        title="Previous year"
      />
      {currentYear ? (
        <TimelineDate
          onChange={e => handleChange(e)}
          value={value || ""}
          maxLength={4}
          minLength={4}
        />
      ) : (
        <Loader regular />
      )}
      <TimeArrow
        direction="right"
        onClick={() => store.articleStore.incrementYear()}
        title="Next year"
      />
      <TimeArrow
        direction="right"
        double
        primary
        onClick={() => store.articleStore.decrementYear()}
        title="Next with data"
      />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
