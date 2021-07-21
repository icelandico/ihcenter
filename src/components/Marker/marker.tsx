import React, { FunctionComponent, useRef, useEffect } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L, { DivIcon } from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { apiUrls } from "../../store/api/api"
import { ArticleModel } from "../../store/models/article"
import { CustomMarker, CustomPopup } from "./marker-styles"
import { chooseColor } from "../../utils/articleTypeColor"
import { chooseIcon } from "../../utils/chooseIcon"

interface IProps {
  store?: typeof rootStore
  article: ArticleModel
  key: string
  position: [number, number]
  type: string
  isActive: boolean
}

const MapMarker: FunctionComponent<IProps> = ({
  store,
  article,
  key,
  position,
  type,
  isActive
}: IProps) => {
  const map = useMap()
  const markerRef = useRef(null)

  const customIcon = (): DivIcon => {
    return L.divIcon({
      html: ReactDOMServer.renderToString(
        <CustomMarker color={chooseColor(type)} />
      ),
      iconAnchor: [15, 15]
    })
  }

  useEffect(() => {
    if (isActive === true) {
      map.panTo(position)
      markerRef.current.openPopup()
    }
  }, [isActive])

  return (
    <Marker
      icon={customIcon()}
      key={key}
      position={position}
      eventHandlers={{
        click: () => {
          store.articleStore.toggle(article.identifier)
        }
      }}
      ref={markerRef}
    >
      <Popup autoPan={false}>
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
