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
    await store.characterStore.getAllCharacters()
  }

  changeClicked = (character: any) => {
    this.setState({
      currentClicked: character
    })
  }

  showMarkers = (character: ArticleTypes) => {
    const coords = character.startCoords
      .split(",")
      .map((coordinate: string) => Number(coordinate))
    const markerCoords: [number, number] = [coords[0], coords[1]]
    return (
      <MapMarker
        key={character.id}
        character={character}
        id={character.id}
        position={markerCoords}
        name={character.name}
        image={character.imageUrl}
      />
    )
  }

  render() {
    const { characterStore } = rootStore
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
        {characterStore.characters.length > 0
          ? characterStore.characters.map((character: ArticleTypes) =>
            character.startCoords ? this.showMarkers(character) : null
          )
          : null}
        {/* </MapMarker> */}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
