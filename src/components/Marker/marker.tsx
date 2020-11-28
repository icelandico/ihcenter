import React, { useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L, { DivIcon } from "leaflet"
import ReactDOMServer from "react-dom/server"
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

export const chooseIcon = (type: string) => {
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

const MapMarker: React.FC<IProps> = props => {
  const [isMarkerClicked, setClickedMarker] = useState<boolean>(false)

  const customIcon = (): DivIcon => {
    const divIcon = L.divIcon({
      html: ReactDOMServer.renderToString(
        <CustomMarker color={chooseColor(props.type)} />
      ),
      iconAnchor: [15, 15]
    })
    return divIcon
  }

  const switchIcon = () => {
    const { article } = props
    const { store } = props
    setClickedMarker(!isMarkerClicked)
    store.articleStore.toggle(article)
  }

  const { key, position } = props

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
        <CustomPopup color={chooseColor(props.type)}>
          <div
            color={chooseColor(props.type)}
            style={{
              backgroundImage: `url(${
                props.article && props.article.image
                  ? `${apiUrls.baseUrl}${props.article.image.url}`
                  : chooseIcon(props.type)
              })`
            }}
          />
        </CustomPopup>
      </Popup>
    </Marker>
  )
}

export default inject("store")(observer(MapMarker))
