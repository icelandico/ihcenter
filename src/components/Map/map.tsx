import * as React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { marker } from "leaflet"
import { mapSettings } from "./map-utils"
import CharactersStore from "../../store/models/character"

export interface Props {
  store?: typeof CharactersStore
}

export interface State {}

const showMarkers = (character: any, index: number) => {
  const coords = character.coords
    .split(",")
    .map((coordinate: string) => Number(coordinate))
  console.log(character)
  const markerCoords = [coords[0], coords[1]]
  return (
    <Marker key={index} position={[coords[0], coords[1]]}>
      <Popup>{character.fullName}</Popup>
    </Marker>
  )
}

class MapComponent extends React.Component<Props, State> {
  async componentDidMount() {
    const { store } = this.props
    await store.getAllCharacters()
  }

  render() {
    const { characters } = CharactersStore
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
        {characters.length > 0
          ? characters.map((character: object, i) => showMarkers(character, i))
          : null}

        <Marker position={mapSettings.coordinates}>
          <Popup>The Best Karl Was born here!</Popup>
        </Marker>
      </Map>
    )
  }
}

export default inject("store")(observer(MapComponent))
