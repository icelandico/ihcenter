import * as React from "react"
import {
  TabContainer,
  TabIcon,
  TabText,
  TabExtraIcon
} from "./details-info-tab-styles"
import Default from "../../../static/flags/Ukraine.svg"

interface Props {
  iconUrl?: string
  icon?: string
  text?: string
  round?: boolean
  border?: boolean
  founder?: boolean
  founderIconUrl?: string
}

const DetailsInfoTab = (props: Props) => {
  const { iconUrl, text, round, border, founder, founderIconUrl } = props
  console.log("is founder", founder)
  return (
    <TabContainer>
      <TabIcon
        round={round}
        border={border}
        style={{
          backgroundImage: `url(${iconUrl || `${Default}`})`
        }}
      >
        {founder && (
          <TabExtraIcon
            style={{
              backgroundImage: `url(${founderIconUrl || `${Default}`})`
            }}
          />
        )}
      </TabIcon>
      <TabText>{text}</TabText>
    </TabContainer>
  )
}

export default DetailsInfoTab
