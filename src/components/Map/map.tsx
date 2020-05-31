import * as React from "react"
import { Map, TileLayer } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./types"
import { ArticleTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import MapMarker from "../Marker/marker"

interface Props {
  store?: typeof rootStore
}

interface State {}

class MapComponent extends React.Component<Props, State> {
  async componentDidMount() {
    const { store } = this.props
    await store.articleStore.getAllArticles()
  }

  showMarkers = (article: ArticleTypes) => {
    const coords = article.startCoords
      .split(",")
      .map((coordinate: string) => Number(coordinate))
    const markerCoords: [number, number] = [coords[0], coords[1]]
    return (
      <MapMarker
        clicked={false}
        key={article.id}
        article={article}
        position={markerCoords}
      />
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
        {articleStore.articles.length
          ? articleStore.articles.map((article: ArticleTypes) =>
              article.startCoords ? this.showMarkers(article) : null
            )
          : null}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
