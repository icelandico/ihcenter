import React from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import {
  TimelineMenuContainer,
  TimelineMenuOptions,
  TimelineOption
} from "./timeline-menu-styles"
import { BY_YEAR, SHOW_ALL} from "../../../store/constants/filters"

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
          onClick={() => switchTimelineType(SHOW_ALL)}
          option="firebrick"
          active={activeOption === SHOW_ALL}
        />
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
