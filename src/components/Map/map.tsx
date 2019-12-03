import * as React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { mapSettings } from "./map-utils"

const MapComponent = () => {
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
      <Marker position={mapSettings.coordinates}>
        <Popup>The Best Karl Was born here!</Popup>
      </Marker>
    </Map>
  )
}

export default MapComponent
