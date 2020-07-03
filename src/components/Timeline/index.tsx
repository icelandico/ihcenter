import * as React from "react"
import { inject, observer } from "mobx-react"
import { TimelineContainer, TimelineMenu } from "./index-styles"

interface Props {}

const Timeline: React.FC<Props> = props => {
  return (
    <TimelineContainer>
      <TimelineMenu />
      <div className="timeline-main" />
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
