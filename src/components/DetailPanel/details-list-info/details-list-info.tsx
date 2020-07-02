import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
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

const renderTypeDetails = (details: ArticleModel): JSX.Element => {
  const tabGenerator = new TabGenerator(details)
  const { type } = details
  switch (type) {
    case "person":
      return tabGenerator.renderPerson()
    case "event":
      return tabGenerator.renderEvent()
    case "organisation":
      return tabGenerator.renderOrganisation()
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

const DetailListInfo: React.FC<Props> = props => {
  const { details } = props
  return (
    <div className="content-list-info content-list-info-detailed">
      {details && renderTypeDetails(details)}
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
