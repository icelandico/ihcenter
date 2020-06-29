import * as React from "react"
import { observer, inject } from "mobx-react"
import { rootStore } from "../../../store/RootStore"
import {
  ElementTitle,
  MainImage,
  DetailsContainer,
  DetailsTopContainer,
  DetailsText,
  ElementLink,
  ElementDate,
  WikiLinkContainer
} from "./details-main-info-styles"
import { apiUrls } from "../../../store/api/api"
import { formatDate } from "../../../utils/formatDate"
import { ArticleModel } from "../../../store/models/article"
import EventIcon from "../../../static/icons/event.svg"
import PoliticsIcon from "../../../static/icons/politics.svg"

export interface Props {
  store?: typeof rootStore
  details: ArticleModel
}

const renderImage = (details: ArticleModel): string => {
  if (!details)
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6x-rKSUYJJ6aa673JE2ZsjVcvhoIL6v3tAI_1X8Br56U4VrrL&s"
  if (details && details.image) {
    return `${apiUrls.baseUrl}${details.image.url}`
  }
  const { type } = details
  switch (type) {
    case "person":
      return `${apiUrls.baseUrl}${details.image.url}`
    case "event":
      return EventIcon
    case "organisation":
      return PoliticsIcon
    default:
      return EventIcon
  }
}

const DetailMainInfo: React.FC<Props> = props => {
  const { details } = props

  return (
    <div className="content-list-info content-main-info">
      <MainImage style={{ backgroundImage: `url(${renderImage(details)}` }} />
      <DetailsTopContainer>
        <ElementTitle>{details ? details.name : "Element Name"}</ElementTitle>
        <WikiLinkContainer>
          <ElementLink
            href={details ? details.wikipediaLink : ""}
            target="_blank"
            rel="noopener noreferrer"
          />
        </WikiLinkContainer>
        <ElementDate>
          {details &&
            `${formatDate(details.startDate)} - ${formatDate(details.endDate)}`}
        </ElementDate>
      </DetailsTopContainer>

      <DetailsContainer>
        <DetailsText>
          {details
            ? details.description
            : `Lorem ipsum dolor sit amet, vis et omnis dicit. His reque dicit no
          Eam et eros vivendum splendide, at mel semper eloquentiam, per ei
          dolor intellegam. Nam ferri impedit facilisi ex, falli error aperiri
          sed in. Ex detracto electram mei. Ne simul tempor his, ei diam esse
          assentior usu. Ullum complectitur pro at. Usu et mutat solet soluta,
          usu ut esse consequuntur. Ius no aperiri civibus, ne usu ipsum paulo
          malorum. Ne vis diam bonorum tibique, quo diam perfecto ex, dicam
          iuvaret sit an. Id pri option accusata, te sapientem voluptatibus per.
          An qui sumo principes scripserit, vel cu veniam platonem intellegebat.
          Vis et choro sensibus, graeco aliquid eam ad, nam harum alienum eu.
          Eos te decore adversarium liberavisse, an vim tale platonem
          conclusionemque, ne mel homero invidunt forensibus. No sit civibus
          officiis. Eam te dicunt hendrerit scripserit. Ei semper delectus
          voluptaria duo, minim conclusionemque quo cu, ut sea aliquip accusam.
          Recusabo salutatus nam ut, decore persius vix an. No eum quidam
          fuisset prodesset, errem maluisset rationibus vix ex. Veri praesent
          dissentiunt ei has, te bonorum oporteat nam. Est et brute nonumes.
          Nisl congue iriure ex mei. Nam purto erat ea, vis ignota suavitate
          dissentiunt et. No mea modus iudico, per cu dico laudem abhorreant.
          Est deleniti invidunt no, in his viris elaboraret. No nam solum
          ancillae, nec no inani labore dissentiunt. Et nibh nusquam scribentur
          ius, eos in habeo verear civibus.`}
        </DetailsText>
      </DetailsContainer>
    </div>
  )
}

export default inject("store")(observer(DetailMainInfo))
