import React, {useState} from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import {
  TimelineMenuContainer,
  TimelineMenuOptions,
  TimelineOption
} from "./timeline-menu-styles"

interface Props {
  store?: typeof rootStore
}

const TimelineMenu: React.FC<Props> = props => {
  const { store } = props
  const activeOption = store.articleStore.timelineMode

  const switchTimelineType = (option: string): void => {
    store.articleStore.setTimelineMode(option)
  }

  return (
    <TimelineMenuContainer>
      Timeline Marker Options
      <TimelineMenuOptions>
        <TimelineOption onClick={() => switchTimelineType( "cummulative")} option="firebrick" active={activeOption === "cummulative"} />
        <TimelineOption onClick={() => switchTimelineType( "single")} option="white" active={activeOption === "single"} />
      </TimelineMenuOptions>
    </TimelineMenuContainer>
  )
}

export default inject("store")(observer(TimelineMenu))
