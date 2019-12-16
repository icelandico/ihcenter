import * as React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./map-utils"
import { CharacterTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import { icon, iconClicked } from "../MapIcons/map-icon"
import MapMarker from "../Marker/marker"

export interface Props {
  store?: typeof rootStore
}

export interface State {}

class MapComponent extends React.Component<Props, State> {
  async componentDidMount() {
    const { store } = this.props
    await store.characterStore.getAllCharacters()
  }

  showMarkers = (character: CharacterTypes, index: number) => {
    const coords = character.coords
      .split(",")
      .map((coordinate: string) => Number(coordinate))
    const markerCoords: [number, number] = [coords[0], coords[1]]
    return (
      <MapMarker
        key={index}
        position={markerCoords}
        name={character.fullName}
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
          url={mapSettings.osmTile}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {characterStore.characters.length > 0
          ? characterStore.characters.map((character: CharacterTypes, i) =>
              this.showMarkers(character, i)
            )
          : null}
        {/* </MapMarker> */}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
