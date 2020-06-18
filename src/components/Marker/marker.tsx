import React, { useState } from "react"
import { Marker } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L, { DivIcon, Icon } from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { icon } from "../MapIcons/map-icon"
import DefaultIcon from "../../static/icons/person.svg"
import { ArticleTypes } from "../../types/models-types"
import { apiUrls } from "../../store/api/api"
import { ArticleModel } from "../../store/models/article"

interface Props {
  store?: typeof rootStore
  article: ArticleModel
  key: number
  position: [number, number]
  clicked: boolean
}

type MarkerIcon = DivIcon | Icon

const MapMarker: React.FC<Props> = props => {
  const [isMarkerClicked, setClickedMarker] = useState<boolean>(false)

  const customIcon = (): DivIcon => {
    console.log(props.article)
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
    return isMarkerClicked ? customIcon() : icon
  }

  const switchIcon = () => {
    const { article } = props
    const { store } = props
    store.articleStore.toggle(article)
    setClickedMarker(!isMarkerClicked)
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
    />
  )
}

export default inject("store")(observer(MapMarker))
