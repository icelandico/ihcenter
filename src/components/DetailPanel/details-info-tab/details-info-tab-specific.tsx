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
  DetailsTopItem,
  WritingsList,
  WritingsTitle,
  WritingsYear
} from "../details-list-info/details-list-info-styles"
import { BaseInfo, Writing } from "../../../store/models/types"
import { ArticleModel } from "../../../store/models/article"
import { fonts } from "../../../styles/font"
import { getYear } from "../../../utils/formatDate"

type ArticleOptions = ArticleModel & { [key: string]: any }

interface IDetailsType {
  [key: string]: JSX.Element
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
              <span key={item.name}>
                {item.name || item.title}
                {idx < detailsList.length - 1 ? ", " : ""}
              </span>
            )
          })}
      </div>
    )
  }

  renderWritingsInfo = (details: ArticleOptions, specificDetail: string) => {
    const detailsList = details[specificDetail]
    return (
      <WritingsList>
        {detailsList &&
          detailsList.map((item: Writing, idx: number) => {
            return (
              <li key={item.id}>
                <WritingsTitle>{item.title}</WritingsTitle>
                {item.publicated && (
                  <WritingsYear>({getYear(item.publicated)})</WritingsYear>
                )}
              </li>
            )
          })}
      </WritingsList>
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
      "professions",
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
    return (
      <DetailsInfoTab
        tabId="relatedEvents"
        iconUrl={Events}
        content={this.renderTextInfo(details, "relatedEvent")}
        key={details.id}
      />
    )
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
        key={details.id}
      />
    )
  }

  relatedPersonDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="relatedPersons"
        iconUrl={Influences}
        extend={3.5}
        content={this.renderTextInfo(details, "relatedPerson")}
        key={details.id}
      />
    )
  }

  professionsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="professions"
        iconUrl={Fields}
        fontColor="darkBlue"
        font={fonts.baseSans}
        content={this.renderTextInfo(details, "professions")}
        key={details.id}
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
        font={fonts.baseSans}
        content={this.renderTextInfo(details, "mainideas")}
        key={details.id}
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
        font={fonts.baseSans}
        content={this.renderTextInfo(details, "ideas")}
        key={details.id}
      />
    )
  }

  politicsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="politics"
        iconUrl={Politics}
        fontColor="regularRed"
        font={fonts.baseSans}
        content={this.renderTextInfo(details, "relatedOrg")}
        key={details.id}
      />
    )
  }

  influencesDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influences"
        extend={3.5}
        iconUrl={Influences}
        font={fonts.base}
        content={this.renderTextInfo(details, "influences")}
        key={details.id}
      />
    )
  }

  influencedDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influenced"
        extend={3.5}
        iconUrl={Influenced}
        font={fonts.base}
        content={this.renderTextInfo(details, "influenced")}
        key={details.id}
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
        content={this.renderWritingsInfo(details, "writings")}
        key={details.id}
      />
    )
  }
}
