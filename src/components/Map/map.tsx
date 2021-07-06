import React from "react"
import { Map, TileLayer } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./utils"
import { rootStore } from "../../store/RootStore"
import MapMarker from "../Marker/marker"
import Loader from "../shared/Loader/loader"
import { ArticleModel } from "../../store/models/article"

interface Props {
  store?: typeof rootStore
}

class MapComponent extends React.Component<Props, {}> {
  async componentDidMount() {
    const { store } = this.props
    store.articleStore.getBookmarsFromStore()
    store.articleStore.getRecentlyViewedFromStore()
    await store.articleStore.getAllArticles()
    store.articleStore.setYearsRange()
  }

  showMarkers = (article: ArticleModel): JSX.Element => {
    const coords = article.startCoords
      .split(",")
      .map((coordinate: string) => Number(coordinate))
    const markerCoords: [number, number] = [coords[0], coords[1]]
    return (
      <MapMarker
        isActive={
          rootStore.articleStore.chosenArticle ?
            article.identifier === rootStore.articleStore.chosenArticle.identifier
            : false
        }
        markerIdent={article.identifier}
        key={`${article.type}-${article.id}`}
        article={article}
        position={markerCoords}
        type={article.type}
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
          noWrap
        />
        {articleStore.articles.length ? (
          articleStore.filteredStore.map((article: ArticleModel) =>
            article.startCoords ? this.showMarkers(article) : null
          )
        ) : (
          <Loader background />
        )}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
