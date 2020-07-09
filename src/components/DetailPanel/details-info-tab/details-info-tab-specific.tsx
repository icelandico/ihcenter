import * as React from "react"
import { apiUrls } from "../../../store/api/api"
import DetailsInfoTab from "./details-info-tab"
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
import {
  DetailsTop,
  DetailsTopItem
} from "../details-list-info/details-list-info-styles"
import { BaseInfo, Writing } from "../../../store/models/types"
import { ArticleModel } from "../../../store/models/article"
import { fonts } from "../../../styles/font"

type ArticleOptions = ArticleModel & { [key: string]: any }

interface IDetailsType {
  [key: string]: any
}

export class TabGenerator extends React.Component {
  details: ArticleModel = null

  constructor(details: ArticleModel) {
    super(details)
    this.details = details
  }

  getProperFunction = (tabInfo: string): JSX.Element => {
    const detailsTabs: IDetailsType = {
      baseInfo: this.baseInfoDetails(this.details),
      literature: this.literatureDetails(this.details),
      influenced: this.influencedDetails(this.details),
      influences: this.influencesDetails(this.details),
      politics: this.politicsDetails(this.details),
      ideas: this.ideasDetails(this.details),
      mainIdeas: this.mainIdeasDetails(this.details),
      events: this.eventsDetails(this.details),
      professions: this.professionsDetails(this.details),
      relatedPersons: this.relatedPersonDetails(this.details)
    }
    return detailsTabs[tabInfo]
  }

  renderGeneralInfo = (details: ArticleModel) => {
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

  renderTextInfo = (details: ArticleOptions, specificDetail: string) => {
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

  renderEvent = (): JSX.Element => {
    const eventConfig = [
      "baseInfo",
      "profession",
      "mainIdeas",
      "ideas",
      "politics",
      "events",
      "influences",
      "influenced",
      "literature"
    ]
    return <>A</>
  }

  renderOrganisation = (): JSX.Element => {
    const organisationConfig = [
      "baseInfo",
      "mainIdeas",
      "ideas",
      "politics",
      "events",
      "relatedPersons",
      "literature"
    ]
    return (
      <>
        {organisationConfig.map((element: string) => {
          return this.getProperFunction(element)
        })}
      </>
    )
  }

  renderPerson = (): JSX.Element => {
    const personConfig = [
      "baseInfo",
      "profession",
      "mainIdeas",
      "ideas",
      "politics",
      "events",
      "influences",
      "influenced",
      "literature"
    ]
    return (
      <>
        {personConfig.map((element: string) => {
          return this.getProperFunction(element)
        })}
      </>
    )
  }

  eventsDetails = (details: ArticleModel) => {
    return <DetailsInfoTab tabId="events" iconUrl={Events} />
  }

  baseInfoDetails = (details: ArticleModel): JSX.Element => {
    const flagDetails =
      details && details.nationality && details.nationality.flag
    return (
      <DetailsInfoTab
        tabId="baseInfo"
        iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
        border
        column
        content={this.renderGeneralInfo(details)}
      />
    )
  }

  relatedPersonDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="relatedPersons"
        iconUrl={Influences}
        content={this.renderTextInfo(details, "relatedPerson")}
      />
    )
  }

  professionsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="professions"
        iconUrl={Fields}
        fontColor="darkBlue"
        content={this.renderTextInfo(details, "professions")}
      />
    )
  }

  mainIdeasDetails = (details: ArticleModel) => {
    const mainPrecursor = details && !!details.precursor.length
    return (
      <DetailsInfoTab
        tabId="mainIdeas"
        iconUrl={MainIdeas}
        founder={mainPrecursor}
        founderIconUrl={FounderIcon}
        fontColor="woodBrown"
        content={this.renderTextInfo(details, "mainideas")}
      />
    )
  }

  ideasDetails = (details: ArticleModel) => {
    const ideaPrecursor = details && !!details.ideaPrecursor.length
    return (
      <DetailsInfoTab
        tabId="ideas"
        iconUrl={Ideas}
        founder={ideaPrecursor}
        founderIconUrl={FounderIcon}
        fontColor="woodBrown"
        content={this.renderTextInfo(details, "ideas")}
      />
    )
  }

  politicsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="politics"
        iconUrl={Politics}
        fontColor="regularRed"
        content={this.renderTextInfo(details, "relatedOrg")}
      />
    )
  }

  influencesDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influences"
        extend={3.5}
        iconUrl={Influences}
        content={this.renderTextInfo(details, "influences")}
      />
    )
  }

  influencedDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influenced"
        extend={3.5}
        iconUrl={Influenced}
        content={this.renderTextInfo(details, "influenced")}
      />
    )
  }

  literatureDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="literature"
        iconUrl={Literature}
        round
        fontColor="lightBrown"
        italicFont
        content={this.renderTextInfo(details, "writings")}
      />
    )
  }
}
