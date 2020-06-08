import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import { ArticleTypes } from "../../../types/models-types"
import { apiUrls } from "../../../store/api/api"
import DetailsInfoTab from "../details-info-tab/details-info-tab"
import Fields from "../../../static/icons/fields.svg"
import FounderIcon from "../../../static/icons/current_founder_.svg"
import Ideas from "../../../static/icons/current.svg"
import Politics from "../../../static/icons/politics.svg"
import ConnectedPerson from "../../../static/icons/person.svg"
import Literature from "../../../static/icons/text.svg"
import { ReactComponent as Born } from "../../../static/icons/icon_born.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"

export interface Props {
  store?: typeof rootStore
  details: ArticleTypes
}

const renderGeneralInfo = (details: ArticleTypes) => {
  return (
    <div>
      <span>{details ? details.nationality.name : "Nationality"}</span>
      <SvgIcon Icon={Born} />
      <span>{details.nationality.name}</span>
    </div>
  )
}

const DetailListInfo: React.FC<Props> = props => {
  const { details } = props
  const flagDetails = details && details.nationality && details.nationality.flag
  const precursor = details && !!details.precursor.length
  console.log("Details", details)
  return (
    details && (
      <div className="content-list-info content-list-info-detailed">
        <DetailsInfoTab
          iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
          border
          content={renderGeneralInfo(details)}
        />
        <DetailsInfoTab iconUrl={Fields} />
        <DetailsInfoTab
          iconUrl={Ideas}
          founder={precursor}
          founderIconUrl={FounderIcon}
        />
        <DetailsInfoTab iconUrl={Ideas} />
        <DetailsInfoTab iconUrl={Politics} />
        <DetailsInfoTab iconUrl={ConnectedPerson} round />
        <DetailsInfoTab iconUrl={Literature} round />
      </div>
    )
  )
}

export default inject("store")(observer(DetailListInfo))
