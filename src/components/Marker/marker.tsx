import * as React from "react"
import { Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import { CharacterTypes } from "../../types/models-types"
import { rootStore } from "../../store/RootStore"
import { icon, iconClicked } from "../MapIcons/map-icon"

export interface Props {
  store?: typeof rootStore
  key: number
  position: [number, number]
  name: string
}

export interface State {}

class MapMarker extends React.Component<Props, State> {
  render() {
    const { key, position, name } = this.props
    return (
      <Marker icon={icon} key={key} position={position}>
        <Popup>{name}</Popup>
      </Marker>
    )
  }
}

export default inject("store")(observer(MapMarker))
