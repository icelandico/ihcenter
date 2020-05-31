import * as React from "react"
import { TabContainer, TabIcon } from "./details-info-tab-styles"
import Default from "../../../static/flags/Ukraine.svg"

interface Props {
  iconUrl?: string
  icon?: string
  text?: string
  round?: boolean
  border?: boolean
}

const DetailsInfoTab = (props: Props) => {
  const { iconUrl, text, round, border } = props

  return (
    <TabContainer>
      <TabIcon
        round={round}
        border={border}
        style={{
          backgroundImage: `url(${iconUrl || `${Default}`})`
        }}
      />
      <p>{text}</p>
    </TabContainer>
  )
}

export default DetailsInfoTab
