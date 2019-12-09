import * as React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./map-utils"
import { CharacterTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import L from "leaflet"
import icon from "./../../components/MapIcons/map-icon"

export interface Props {
  store?: typeof rootStore
}

export interface State {}

const showMarkers = (character: CharacterTypes, index: number) => {
  const coords = character.coords
    .split(",")
    .map((coordinate: string) => Number(coordinate))
  const markerCoords: [number, number] = [coords[0], coords[1]]
  return (
    <Marker icon={icon} key={index} position={markerCoords}>
      <Popup>{character.fullName}</Popup>
    </Marker>
  )
}

class MapComponent extends React.Component<Props, State> {
  async componentDidMount() {
    const { store } = this.props
    await store.characterStore.getAllCharacters()
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
          ? characterStore.characters.map((character: CharacterTypes, i) =>
              showMarkers(character, i)
            )
          : null}
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
