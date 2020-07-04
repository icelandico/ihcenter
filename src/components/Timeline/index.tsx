import * as React from "react"
import { inject, observer } from "mobx-react"
import { TimelineContainer, TimelineMenu, TimelineContent, TimelineFrames, TimelineFrameLeft, TimelineFrameRight } from "./index-styles"

interface Props {}

const Timeline: React.FC<Props> = props => {
  return (
    <TimelineContainer>
      <TimelineMenu />
      <TimelineContent>
        <TimelineFrames>
          <TimelineFrameLeft />
          <TimelineFrameRight />
        </TimelineFrames>
      </TimelineContent>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
