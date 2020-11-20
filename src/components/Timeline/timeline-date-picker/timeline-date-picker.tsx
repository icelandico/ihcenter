import React, { useEffect, useState } from "react"
import { inject, observer } from "mobx-react"
import {
  TimeArrow,
  TimelineDate,
  TimelineDateContainer
} from "./timeline-date-picker-styles"
import { rootStore } from "../../../store/RootStore"
import Loader from "../../shared/Loader/loader"

interface IFollowingYears {
  previousYear?: number
  nextYear?: number
}

interface Props {
  store?: typeof rootStore
  currentYear: number
  timelineData: IYearsData[]
}

interface IFollowingYears {
  previousYear?: number
  nextYear?: number
}

interface IYearsData {
  year: number
  isData: boolean
}

const TimelineDatePicker: React.FC<Props> = props => {
  const { store, currentYear, timelineData } = props
  const [value, setValue] = useState(currentYear)
  const [yearsSet, setYears] = useState<IFollowingYears>({})
  const isNotLastYear = store.articleStore.lastYear !== currentYear
  const isNotFirstYear = store.articleStore.firstYear !== currentYear

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(parseInt(value, 10))
    if (value.length >= 4) store.articleStore.setYear(parseInt(value, 10))
  }

  const handleNextEvent = (): void => {
    store.articleStore.setYear(yearsSet.nextYear)
  }

  const handlePrevEvent = (): void => {
    store.articleStore.setYear(yearsSet.previousYear)
  }

  useEffect(() => {
    setValue(currentYear)
  }, [currentYear])

  useEffect(() => {
    timelineData.length > 1 &&
      setYears(calculateFollowingYears(props.timelineData))
  }, [timelineData, currentYear])

  const calculateFollowingYears = (arr: IYearsData[]): IFollowingYears => {
    const previousYear = arr
      .filter(yearElem => yearElem.year < currentYear && yearElem.isData)
      .pop()
    const nextYear = arr
      .filter(yearElem => yearElem.year > currentYear && yearElem.isData)
      .shift()

    return {
      previousYear: previousYear && previousYear.year,
      nextYear: nextYear && nextYear.year
    }
  }

  return (
    <TimelineDateContainer>
      <TimeArrow
        direction="left"
        double
        primary
        onClick={() => handlePrevEvent()}
        title="Previous with data"
        isActive={isNotFirstYear}
      />
      <TimeArrow
        direction="left"
        onClick={() => store.articleStore.decrementYear()}
        title="Previous year"
        isActive={isNotFirstYear}
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
        isActive={isNotLastYear}
      />
      <TimeArrow
        direction="right"
        double
        primary
        onClick={() => handleNextEvent()}
        title="Next with data"
        isActive={isNotLastYear}
      />
    </TimelineDateContainer>
  )
}

export default inject("store")(observer(TimelineDatePicker))
