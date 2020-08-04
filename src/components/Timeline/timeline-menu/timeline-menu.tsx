import React from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import {
  TimelineMenuContainer,
  TimelineMenuOptions,
  TimelineOption
} from "./timeline-menu-styles"
import { BY_YEAR, CUMULATIVE, SHOW_ALL } from "../../../store/constants/filters"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import { ReactComponent as Cumulative } from "../../../static/icons/timeline_cumulative.svg"

interface Props {
  store?: typeof rootStore
}

const TimelineMenu: React.FC<Props> = props => {
  const { store } = props
  const activeOption = store.articleStore.filter

  const switchTimelineType = (option: string): void => {
    store.articleStore.setFilter(option)
  }

  return (
    <TimelineMenuContainer>
      Timeline Marker Options
      <TimelineMenuOptions>
        <TimelineOption
          onClick={() => switchTimelineType(CUMULATIVE)}
          option="firebrick"
          active={activeOption === CUMULATIVE}
        >
          <SvgIcon Icon={Cumulative} />
        </TimelineOption>
        <TimelineOption
          onClick={() => switchTimelineType(BY_YEAR)}
          option="white"
          active={activeOption === BY_YEAR}
        />
      </TimelineMenuOptions>
    </TimelineMenuContainer>
  )
}

export default inject("store")(observer(TimelineMenu))
