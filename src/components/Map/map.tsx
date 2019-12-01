import * as React from "react"
import { Map, TileLayer } from "react-leaflet"
import { mapSettings } from "./map-utils"

class MapComponent extends React.Component {
  render() {
    return (
      <Map
        center={mapSettings.coordinates}
        zoom={mapSettings.zoom}
        style={{ height: "100%" }}
      >
        <TileLayer
          url={mapSettings.tile}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    )
  }
}

export default MapComponent
