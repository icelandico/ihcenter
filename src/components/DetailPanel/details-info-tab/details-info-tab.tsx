import React from "react"
import { inject, observer} from "mobx-react"
import {
  TabContainer,
  TabIcon,
  TabContent,
  TabExtraIcon
} from "./details-info-tab-styles"
import Default from "../../../static/flags/Default.svg"
import { rootStore } from "../../../store/RootStore"

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
  font?: string
  column?: boolean
  italicFont?: boolean
  articleId?: any
  store?: typeof rootStore
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
    font,
    fontColor,
    italicFont,
    articleId,
    store
  } = props

  const renderTabContainer = () => {
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
        <TabContent font={font} italicFont={italicFont} fontColor={fontColor}>
          {content}
        </TabContent>
      </TabContainer>
    )
  }

  const isContent =
    content && content.props.children && content.props.children.length

  return isContent ? renderTabContainer() : null
}

export default inject("store")(observer(DetailsInfoTab))
