import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import {
  TimelineMenuContainer,
  TimelineMenuOptions,
  TimelineOption
} from "./timeline-menu-styles"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import { ReactComponent as Cumulative } from "../../../static/icons/timeline_cumulative.svg"
import { ReactComponent as Single } from "../../../static/icons/timeline_year.svg"
import { FiltersTime } from "../../../store/models/filterModel"

interface IProps {
  store?: typeof rootStore
}

const TimelineMenu: FunctionComponent<IProps> = props => {
  const { store } = props
  const activeOption = store.articleStore.activeFilters.time

  const switchTimelineType = (option: FiltersTime): void => {
    store.articleStore.setFilter(option)
  }

  return (
    <TimelineMenuContainer>
      Timeline Marker Options
      <TimelineMenuOptions>
        <TimelineOption
          onClick={() => switchTimelineType("CUMULATIVE")}
          option="firebrick"
          active={activeOption === "CUMULATIVE"}
        >
          <SvgIcon Icon={Cumulative} height={60} />
        </TimelineOption>
        <TimelineOption
          onClick={() => switchTimelineType("BY_YEAR")}
          option="white"
          active={activeOption === "BY_YEAR"}
        >
          <SvgIcon Icon={Single} />
        </TimelineOption>
      </TimelineMenuOptions>
    </TimelineMenuContainer>
  )
}

export default inject("store")(observer(TimelineMenu))
