import * as React from "react"
import { Map, TileLayer } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./map-utils"
import { ArticleTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import MapMarker from "../Marker/marker"

export interface Props {
  store?: typeof rootStore
}

export interface State {
  currentClicked: any
}

class MapComponent extends React.Component<Props, State> {
  state = {
    currentClicked: ""
  }

  async componentDidMount() {
    const { store } = this.props
    await store.articleStore.getAllArticles()
  }

  changeClicked = (article: any) => {
    this.setState({
      currentClicked: article
    })
  }

  showMarkers = (article: ArticleTypes) => {
    const coords = article.startCoords
      .split(",")
      .map((coordinate: string) => Number(coordinate))
    const markerCoords: [number, number] = [coords[0], coords[1]]
    return (
      <MapMarker key={article.id} article={article} position={markerCoords} />
    )
  }

  render() {
    const { articleStore } = rootStore
    return (
      <Map
        center={mapSettings.coordinates}
        zoom={mapSettings.zoom}
        style={{ height: "100%" }}
      >
        <TileLayer
          url={mapSettings.mainTile}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {articleStore.articles.length > 0
          ? articleStore.articles.map((article: ArticleTypes) =>
            article.startCoords ? this.showMarkers(article) : null
          )
          : null}
        {/* </MapMarker> */}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
