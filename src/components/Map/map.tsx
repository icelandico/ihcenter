import * as React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { mapSettings } from "./map-utils"

interface CharactersStore {
  characters: []
}

// const showMarkers = (character: object) => {
//   return (
//     <Marker position={character.coords}>
//       <Popup>The Best Karl Was born here!</Popup>
//     </Marker>
//   )
// }

const MapComponent: React.FC<CharactersStore> = props => {
  const store = props
  const characterList: [] = store.characters
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
      {/* {characterList.length > 0
        ? characterList.map((character: object) => showMarkers(character))
        : null} */}

      <Marker position={mapSettings.coordinates}>
        <Popup>The Best Karl Was born here!</Popup>
      </Marker>
    </Map>
  )
}

export default inject("store")(observer(MapComponent))
