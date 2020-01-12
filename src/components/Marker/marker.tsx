import * as React from "react"
import { Marker } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { icon } from "../MapIcons/map-icon"
import DefaultIcon from "../../static/icons/person.svg"

interface Props {
  store?: typeof rootStore
  character: any
  key: number
  id: number
  position: [number, number]
  name: string
  image: string
}

interface State {
  clicked: boolean
}

class MapMarker extends React.Component<Props, State> {
  state = {
    clicked: false
  }

  customIcon = L.divIcon({
    html: ReactDOMServer.renderToString(
      <div className="custom-marker">
        <div
          className="marker-icon"
          style={{
            backgroundImage: `url(${this.props.character.imageUrl ||
              DefaultIcon})`
          }}
        />
      </div>
    ),
    iconAnchor: [15, 30]
  })

  chooseIcon = () => {
    const { clicked } = this.state
    return clicked ? this.customIcon : icon
  }

  switchIcon = () => {
    const { store } = this.props
    store.characterStore.toggle(this.props.character)
    const { clicked } = this.state
    this.setState({
      clicked: !clicked
    })
  }

  render() {
    const { key, position } = this.props
    return (
      <>
        <Marker
          icon={this.chooseIcon()}
          key={key}
          position={position}
          iconAnchor={[0, 0]}
          iconSize={[40, 40]}
          onClick={this.switchIcon}
        />
      </>
    )
  }
}

export default inject("store")(observer(MapMarker))
