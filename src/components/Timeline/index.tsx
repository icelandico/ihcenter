import * as React from "react"
import { inject, observer } from "mobx-react"
import { TimelineContainer } from "./index-styles";

interface Props {}

const Timeline: React.FC<Props> = props => {
  return (
    <TimelineContainer>
      <p>Hello Timeline</p>
    </TimelineContainer>
  )
}

export default inject("store")(observer(Timeline))
