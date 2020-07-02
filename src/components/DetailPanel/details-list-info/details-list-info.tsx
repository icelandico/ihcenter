import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { apiUrls } from "../../../store/api/api"
import DetailsInfoTab from "../details-info-tab/details-info-tab"
import Fields from "../../../static/icons/fields.svg"
import FounderIcon from "../../../static/icons/current_founder_.svg"
import MainIdeas from "../../../static/icons/current.svg"
import Ideas from "../../../static/icons/idea.svg"
import Politics from "../../../static/icons/politics.svg"
import Events from "../../../static/icons/events.svg"
import Influences from "../../../static/icons/influences.svg"
import Influenced from "../../../static/icons/influenced.svg"
import Literature from "../../../static/icons/text.svg"
import { ReactComponent as Born } from "../../../static/icons/icon_born.svg"
import { ReactComponent as Dead } from "../../../static/icons/icon_dead.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import { DetailsTop, DetailsTopItem } from "./details-list-info-styles"
import { BaseInfo, Writing } from "../../../store/models/types"
import { ArticleModel } from "../../../store/models/article"
import { TabGenerator } from "../details-info-tab/details-info-tab-specific"

export interface Props {
  store?: typeof rootStore
  details: ArticleModel
}

const renderGeneralInfo = (details: ArticleModel) => {
  const nationality = details.nationality
    ? details.nationality.name
    : "Global guy"
  return (
    <DetailsTop column>
      <DetailsTopItem>
        {nationality},{"  "}
      </DetailsTopItem>
      <DetailsTopItem>
        <SvgIcon Icon={Born} />{" "}
        <span style={{ marginLeft: "0.5rem" }}>
          {details.startPlace || "Born"},{" "}
        </span>
      </DetailsTopItem>
      <DetailsTopItem>
        <SvgIcon Icon={Dead} />{" "}
        <span style={{ marginLeft: "0.5rem" }}>
          {details.EndPlace || "Died"}
        </span>
      </DetailsTopItem>
    </DetailsTop>
  )
}

type ArticleOptions = ArticleModel & { [key: string]: any }

const renderTextInfo = (details: ArticleOptions, specificDetail: string) => {
  const detailsList = details[specificDetail]
  return (
    <div>
      {detailsList &&
        detailsList.map((item: BaseInfo & Writing, idx: number) => {
          return (
            <span>
              {item.name || item.title}
              {idx < detailsList.length - 1 ? ", " : ""}
            </span>
          )
        })}
    </div>
  )
}

const renderTypeDetails = (details: ArticleModel): JSX.Element => {
  const tabGenerator = new TabGenerator(details)
  const { type } = details
  switch (type) {
    case "person":
      return tabGenerator.renderPerson()
    case "event":
      return tabGenerator.renderEvent(details)
    case "organisation":
      return tabGenerator.renderOrganisation(details)
    default:
      return tabGenerator.renderPerson()
  }
}

// const renderEvent = (details: ArticleModel): JSX.Element => {
//   const flagDetails = details && details.nationality && details.nationality.flag
//   return (
//     <>
//       <DetailsInfoTab
//         tabId="baseInfo"
//         iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
//         border
//         content={renderGeneralInfo(details)}
//       />
//     </>
//   )
// }

// const renderOrganisation = (details: ArticleModel): JSX.Element => {
//   const flagDetails = details && details.nationality && details.nationality.flag
//   return (
//     <>
//       <DetailsInfoTab
//         tabId="baseInfo"
//         iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
//         border
//         content={renderGeneralInfo(details)}
//       />
//       <DetailsInfoTab
//         tabId="relatedPerson"
//         iconUrl={Influences}
//         content={renderTextInfo(details, "relatedPerson")}
//       />
//     </>
//   )
// }

const DetailListInfo: React.FC<Props> = props => {
  const { details } = props
  return (
    <div className="content-list-info content-list-info-detailed">
      {details && renderTypeDetails(details)}
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
