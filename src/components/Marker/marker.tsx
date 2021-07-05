import React, { FunctionComponent } from "react"
import { Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L, { DivIcon } from "leaflet"
import ReactDOMServer from "react-dom/server"
import { onSnapshot } from "mobx-state-tree"
import { rootStore } from "../../store/RootStore"
import PersonIcon from "../../static/icons/person.svg"
import EventsIcon from "../../static/icons/events.svg"
import WritingsIcon from "../../static/icons/text.svg"
import OrganisationsIcon from "../../static/icons/politics.svg"
import { apiUrls } from "../../store/api/api"
import { ArticleModel } from "../../store/models/article"
import { CustomMarker, CustomPopup } from "./marker-styles"
import { chooseColor } from "../../utils/articleTypeColor"

interface IProps {
  store?: typeof rootStore
  article: ArticleModel
  key: string
  position: [number, number]
  clicked: boolean
  type: string
}

export const chooseIcon = (type: string): string => {
  switch (type) {
    case "person":
      return PersonIcon
    case "event":
      return EventsIcon
    case "organisation":
      return OrganisationsIcon
    case "writing":
      return WritingsIcon
    default:
      return PersonIcon
  }
}

const MapMarker: FunctionComponent<IProps> = ({ store, article, key, position, clicked, type }: IProps) => {
  
  const customIcon = (): DivIcon => {
    const divIcon = L.divIcon({
      html: ReactDOMServer.renderToString(
        <CustomMarker color={chooseColor(type)} />
      ),
      iconAnchor: [15, 15]
    })
    return divIcon
  }

  const switchIcon = () => {
    onSnapshot(store.articleStore, newSnapshot => {
      console.log("NEW article", newSnapshot.chosenArticle)
    })
    store.articleStore.toggle(article.identifier)
  }

  return (
    <Marker
      icon={customIcon()}
      key={key}
      position={position}
      iconAnchor={[0, 0]}
      iconSize={[40, 40]}
      onClick={switchIcon}
    >
      <Popup style={{ background: "transparent" }}>
        <CustomPopup color={chooseColor(type)}>
          <div
            color={chooseColor(type)}
            style={{
              backgroundImage: `url(${
                article && article.image
                  ? `${apiUrls.baseUrl}${article.image.url}`
                  : chooseIcon(type)
              })`
            }}
          />
        </CustomPopup>
      </Popup>
    </Marker>
  )
}

export default inject("store")(observer(MapMarker))
