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
  content?: JSX.Element
  round?: boolean
  border?: boolean
  founder?: boolean
  founderIconUrl?: string
  tabId: string
  extend?: number
  fontColor?: string
}

const DetailsInfoTab: React.FC<Props> = props => {
  const {
    iconUrl,
    content,
    round,
    border,
    extend,
    founder,
    founderIconUrl,
    tabId,
    fontColor
  } = props
  console.log("Content", tabId, content)
  if (content && content.props.children && content.props.children.length) {
    return (
      <TabContainer id={tabId}>
        <TabIcon
          round={round}
          border={border}
          extend={extend}
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
        <TabContent fontColor={fontColor}>{content}</TabContent>
      </TabContainer>
    )
  }
  return null
}

export default DetailsInfoTab
