import * as React from "react"
import { observer, inject } from "mobx-react"
import { useEffect, useRef, useState} from "react"
import { rootStore } from "../../../store/RootStore"
import {
  ElementTitle,
  MainImage,
  DetailsContainer,
  DetailsTopContainer,
  DetailsText,
  ElementLink,
  ElementDate,
  WikiLinkContainer,
  Bookmark,
  BookmarkContainer
} from "./details-main-info-styles"
import { apiUrls } from "../../../store/api/api"
import { formatDate } from "../../../utils/formatDate"
import { ArticleModel } from "../../../store/models/article"
import EventIcon from "../../../static/icons/events.svg"
import PoliticsIcon from "../../../static/icons/politics.svg"
import SvgIcon from "../../shared/SvgIcon/svgIcon"
import { ReactComponent as BookmarkOff } from "../../../static/icons/bookmark_off.svg"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"
import { BottomGradient } from "../../shared/Styles/shared-styled-components"

export interface IProps {
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

interface IBookmarkItem {
  id: string
}

const DetailMainInfo: React.FC<IProps> = props => {
  const [isBookmarked, setBookmark] = useState(false)
  const { details } = props
  const scrollDiv = useRef(null)

  const setBookmarkStatus = (id: string) => {
    const bookmarks = props.store.articleStore.userBookmarks
    const newCollection = isInStorage(id)
      ? bookmarks.filter((item: IBookmarkItem) => item.id !== id)
      : bookmarks.concat({ id })
    window.localStorage.setItem("userBookmarks", JSON.stringify(newCollection))
    props.store.articleStore.setUserBookmarks(newCollection)
    setBookmark(isInStorage(id))
  }

  const isInStorage = (id: string) => {
    const bookmarks = window.localStorage.getItem("userBookmarks")
    const itemsCollection = JSON.parse(bookmarks) || []
    return itemsCollection.some((item: IBookmarkItem) => item.id === id)
  }

  useEffect(() => {
    if (details) {
      const isViewBookmarked = isInStorage(details.identifier)
      setBookmark(isViewBookmarked)
    }
  }, [props])

  return (
    <div
      className="content-list-info content-main-info"
      style={{ position: "relative" }}
      data-is-bookmarked={isBookmarked}
    >
      <MainImage
        bookmarkActive={isBookmarked}
        style={{ backgroundImage: `url(${renderImage(details)}` }}
      />
      <BookmarkContainer
        onClick={() => setBookmarkStatus(details.identifier)}
      >
        <Bookmark bookmarkActive={isBookmarked}>
          <SvgIcon Icon={BookmarkOff} />
        </Bookmark>
      </BookmarkContainer>
      <DetailsTopContainer>
        <ElementTitle>{details ? details.name : "Element Name"}</ElementTitle>
        <WikiLinkContainer>
          <ElementLink
            href={details && details.wikipediaLink ? details.wikipediaLink : ""}
            target="_blank"
            rel="noopener noreferrer"
          />
        </WikiLinkContainer>
        <ElementDate>
          {details &&
            `${formatDate(details.startDate)} - ${formatDate(details.endDate)}`}
        </ElementDate>
      </DetailsTopContainer>

      <DetailsContainer ref={scrollDiv}>
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
          {scrollDiv.current && (
            <ScrollIndicator container={scrollDiv.current} />
          )}
        </DetailsText>
      </DetailsContainer>
      <BottomGradient />
    </div>
  )
}

export default inject("store")(observer(DetailMainInfo))
