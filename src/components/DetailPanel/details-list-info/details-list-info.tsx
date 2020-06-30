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
        <SvgIcon Icon={Born} /> <span>{details.startPlace || "Born"}, </span>
      </DetailsTopItem>
      <DetailsTopItem>
        <SvgIcon Icon={Dead} /> <span>{details.EndPlace || "Died"}</span>
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
  const { type } = details
  switch (type) {
    case "person":
      return renderPerson(details)
    case "event":
      return renderEvent(details)
    case "organisation":
      return renderOrganisation(details)
    default:
      return renderPerson(details)
  }
}

const renderEvent = (details: ArticleModel): JSX.Element => {
  const flagDetails = details && details.nationality && details.nationality.flag
  return (
    <>
      <DetailsInfoTab
        tabId="baseInfo"
        iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
        border
        content={renderGeneralInfo(details)}
      />
    </>
  )
}

const renderOrganisation = (details: ArticleModel): JSX.Element => {
  const flagDetails = details && details.nationality && details.nationality.flag
  return (
    <>
      <DetailsInfoTab
        tabId="baseInfo"
        iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
        border
        content={renderGeneralInfo(details)}
      />
      <DetailsInfoTab
        tabId="relatedPerson"
        iconUrl={Influences}
        content={renderTextInfo(details, "relatedPerson")}
      />
    </>
  )
}

const renderPerson = (details: ArticleModel): JSX.Element => {
  const flagDetails = details && details.nationality && details.nationality.flag
  const precursor = details && !!details.precursor.length
  return (
    <>
      <DetailsInfoTab
        tabId="baseInfo"
        iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
        border
        column
        content={renderGeneralInfo(details)}
      />
      <DetailsInfoTab
        tabId="professions"
        iconUrl={Fields}
        fontColor="darkBlue"
        content={renderTextInfo(details, "professions")}
      />
      <DetailsInfoTab
        tabId="mainIdeas"
        iconUrl={MainIdeas}
        founder={precursor}
        founderIconUrl={FounderIcon}
        fontColor="woodBrown"
        content={renderTextInfo(details, "mainideas")}
      />
      <DetailsInfoTab
        tabId="ideas"
        iconUrl={Ideas}
        fontColor="woodBrown"
        content={renderTextInfo(details, "ideas")}
      />
      <DetailsInfoTab
        tabId="politics"
        iconUrl={Politics}
        fontColor="regularRed"
        content={renderTextInfo(details, "relatedOrg")}
      />
      <DetailsInfoTab tabId="events" iconUrl={Events} />
      <DetailsInfoTab
        tabId="influences"
        extend={3.5}
        iconUrl={Influences}
        content={renderTextInfo(details, "influences")}
      />
      <DetailsInfoTab
        tabId="influenced"
        extend={3.5}
        iconUrl={Influenced}
        content={renderTextInfo(details, "influenced")}
      />
      <DetailsInfoTab
        tabId="literature"
        iconUrl={Literature}
        round
        fontColor="lightBrown"
        content={renderTextInfo(details, "writings")}
      />
    </>
  )
}

const DetailListInfo: React.FC<Props> = props => {
  const { details } = props
  return (
    <div className="content-list-info content-list-info-detailed">
      {details && renderTypeDetails(details)}
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
