import React, { useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L, { DivIcon, Icon } from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { icon } from "../MapIcons/map-icon"
import DefaultIcon from "../../static/icons/person.svg"
import { apiUrls } from "../../store/api/api"
import { ArticleModel } from "../../store/models/article"

interface Props {
  store?: typeof rootStore
  article: ArticleModel
  key: string
  position: [number, number]
  clicked: boolean
}

type MarkerIcon = DivIcon | Icon

const MapMarker: React.FC<Props> = props => {
  const [isMarkerClicked, setClickedMarker] = useState<boolean>(false)

  const customIcon = (): DivIcon => {
    const divIcon = L.divIcon({
      html: ReactDOMServer.renderToString(
        <div className="custom-marker">
          <div
            className="marker-icon"
            style={{
              backgroundImage: `url(${
                props.article && props.article.image
                  ? `${apiUrls.baseUrl}${props.article.image.url}`
                  : DefaultIcon
              })`
            }}
          />
        </div>
      ),
      iconAnchor: [15, 30]
    })
    return divIcon
  }

  const chooseIcon = (): MarkerIcon => {
    // return isMarkerClicked ? customIcon() : icon
    return icon
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
      icon={chooseIcon()}
      key={key}
      position={position}
      iconAnchor={[0, 0]}
      iconSize={[40, 40]}
      onClick={switchIcon}
    >
      <Popup style={{ background: "transparent" }}>
        <div className="custom-marker">
          <div
            className="marker-icon"
            style={{
              // width: "100%",
              // height: "100%",
              // backgroundSize: "cover",
              backgroundImage: `url(${
                props.article && props.article.image
                  ? `${apiUrls.baseUrl}${props.article.image.url}`
                  : DefaultIcon
              })`
            }}
          />
        </div>
      </Popup>
    </Marker>
  )
}

export default inject("store")(observer(MapMarker))
