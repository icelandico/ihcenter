import * as React from "react"
import {
  TabContainer,
  TabIcon,
  TabContent,
  TabExtraIcon
} from "./details-info-tab-styles"
import Default from "../../../static/flags/Default.svg"

interface Props {
  iconUrl?: string
  icon?: string
  content?: string
  round?: boolean
  border?: boolean
  founder?: boolean
  founderIconUrl?: string
}

const DetailsInfoTab: React.FC<Props> = props => {
  const { iconUrl, content, round, border, founder, founderIconUrl } = props

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
      <TabContent>{content}</TabContent>
    </TabContainer>
  )
}

export default DetailsInfoTab
