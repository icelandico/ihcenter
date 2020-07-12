import React from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { TimelineMenuContainer } from "./timeline-menu-styles";

interface Props {
  store?: typeof rootStore
}

const TimelineMenu: React.FC<Props> = props => {

  return (
    <TimelineMenuContainer>
      Timeline Marker Options
    </TimelineMenuContainer>
  )
}

export default inject("store")(observer(TimelineMenu))
