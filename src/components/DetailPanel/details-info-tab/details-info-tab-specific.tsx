import React, { FunctionComponent } from "react"
import { inject, observer } from "mobx-react"
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
import Person from "../../../static/icons/person.svg"
import { ReactComponent as Born } from "../../../static/icons/icon_born.svg"
import { ReactComponent as Dead } from "../../../static/icons/icon_dead.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import {
  DetailsTop,
  DetailsTopItem,
  DetailsTitle,
  WritingsList,
  WritingsTitle,
  WritingsYear
} from "../details-list-info/details-list-info-styles"
import { BaseInfo, Writing } from "../../../store/models/types"
import { ArticleModel } from "../../../store/models/article"
import { fonts } from "../../../styles/font"
import { getYear } from "../../../utils/formatDate"

type ArticleOptions = ArticleModel & { [key: string]: any }

interface IProps {
  articleType: string
  details: ArticleModel
}

interface IDetailsType {
  [key: string]: JSX.Element
}

const DetailsInfoTabSpecific: ({
  articleType,
  details
}: IProps) => JSX.Element = ({ articleType, details }: IProps) => {
  const getProperFunction = (tabInfo: string): JSX.Element => {
    const detailsTabs: IDetailsType = {
      baseInfo: baseInfoDetails(details),
      literature: literatureDetails(details),
      influenced: influencedDetails(details),
      influences: influencesDetails(details),
      politics: politicsDetails(details),
      ideas: ideasDetails(details),
      mainIdeas: mainIdeasDetails(details),
      events: eventsDetails(details),
      professions: professionsDetails(details),
      relatedPersons: relatedPersonDetails(details)
    }
    return detailsTabs[tabInfo]
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

  const renderTextInfo = (details: ArticleOptions, specificDetail: string) => {
    const detailsList = details[specificDetail].sort(
      (a: BaseInfo & Writing, b: BaseInfo & Writing) => {
        const prev = a.name.toLowerCase()
        const next = b.name.toLowerCase()

        if (prev < next) return -1
        if (prev > next) return 1
        return 0
      }
    )

    return (
      <div>
        {detailsList &&
          detailsList.map((item: BaseInfo & Writing, idx: number) => {
            return (
              <DetailsTitle key={item.name}>
                {item.name || item.title}
                {idx < detailsList.length - 1 ? ", " : ""}
              </DetailsTitle>
            )
          })}
      </div>
    )
  }

  const renderWritingsInfo = (
    details: ArticleOptions,
    specificDetail: string
  ) => {
    const detailsList = details[specificDetail]
    return (
      <WritingsList>
        {detailsList &&
          detailsList.map((item: Writing, idx: number) => {
            return (
              <li key={`${item.id}-writing}`}>
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

  const renderEvent = (): JSX.Element => {
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

  const renderOrganisation = (): JSX.Element => {
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
          return getProperFunction(element)
        })}
      </>
    )
  }

  const renderPerson = (): JSX.Element => {
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
          return getProperFunction(element)
        })}
      </>
    )
  }

  const eventsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="relatedEvents"
        iconUrl={Events}
        content={renderTextInfo(details, "relatedEvent")}
        key={`${details.id}-event`}
      />
    )
  }

  const baseInfoDetails = (details: ArticleModel): JSX.Element => {
    const flagDetails =
      details && details.nationality && details.nationality.flag
    return (
      <DetailsInfoTab
        tabId="baseInfo"
        iconUrl={flagDetails ? `${apiUrls.baseUrl}/${flagDetails.url}` : null}
        border
        column
        content={renderGeneralInfo(details)}
        key={`${details.id}-info`}
      />
    )
  }

  const relatedPersonDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="relatedPersons"
        iconUrl={Person}
        content={renderTextInfo(details, "relatedPerson")}
        key={`${details.id}-rel-person`}
      />
    )
  }

  const professionsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="professions"
        iconUrl={Fields}
        fontColor="darkBlue"
        font={fonts.baseSans}
        content={renderTextInfo(details, "professions")}
        key={`${details.id}-profession`}
      />
    )
  }

  const mainIdeasDetails = (details: ArticleModel) => {
    const mainPrecursor = details && !!details.precursor.length
    return (
      <DetailsInfoTab
        tabId="mainIdeas"
        iconUrl={MainIdeas}
        founder={mainPrecursor}
        founderIconUrl={FounderIcon}
        fontColor="woodBrown"
        font={fonts.baseSans}
        content={renderTextInfo(details, "mainideas")}
        key={`${details.id}-mainidea`}
      />
    )
  }

  const ideasDetails = (details: ArticleModel) => {
    const ideaPrecursor = details && !!details.ideaPrecursor.length

    return (
      <DetailsInfoTab
        tabId="ideas"
        iconUrl={Ideas}
        founder={ideaPrecursor}
        founderIconUrl={FounderIcon}
        fontColor="woodBrown"
        font={fonts.baseSans}
        content={renderTextInfo(details, "ideas")}
        key={`${details.id}-idea`}
      />
    )
  }

  const politicsDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="politics"
        iconUrl={Politics}
        fontColor="regularRed"
        font={fonts.baseSans}
        content={renderTextInfo(details, "relatedOrg")}
        key={`${details.id}-politics`}
      />
    )
  }

  const influencesDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influences"
        extend={3.5}
        iconUrl={Influences}
        font={fonts.base}
        content={renderTextInfo(details, "influences")}
        key={`${details.id}-influence`}
        articleId={details}
      />
    )
  }

  const influencedDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="influenced"
        extend={3.5}
        iconUrl={Influenced}
        font={fonts.base}
        content={renderTextInfo(details, "influenced")}
        key={`${details.id}-influenced`}
        articleId={details}
      />
    )
  }

  const literatureDetails = (details: ArticleModel) => {
    return (
      <DetailsInfoTab
        tabId="literature"
        iconUrl={Literature}
        round
        fontColor="lightBrown"
        italicFont
        content={renderWritingsInfo(details, "writings")}
        key={`${details.id}-literature`}
      />
    )
  }

  const renderSwitch = (type: string): JSX.Element => {
    switch (type) {
      case "person":
        return renderPerson()
      case "event":
        return renderEvent()
      case "organisation":
        return renderOrganisation()
      default:
        return renderPerson()
    }
  }

  return renderSwitch(articleType)
}

export default inject("store")(observer(DetailsInfoTabSpecific))
