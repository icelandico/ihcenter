import * as React from "react"
import { Marker, Popup } from "react-leaflet"
import { observer, inject } from "mobx-react"
import styled from "styled-components"
import L from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { icon, iconClicked } from "../MapIcons/map-icon"

interface Props {
  store?: typeof rootStore
  key: number
  position: [number, number]
  name: string
  image: string
}

interface State {
  clicked: boolean
}

const divMarker = styled.div`
  width: 30px !important;
  height: 30px !important;
  border-radius: 50%;
  background-image: url("./static/icons/person.svg");
  background-size: contain;
  background-repeat: no-repeat;
`

const customIcon = L.divIcon({
  html: ReactDOMServer.renderToString(
    <div className="custom-marker">
      <div
        className="marker-icon"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Karl_Marx.jpg/205px-Karl_Marx.jpg')"
        }}
      />
    </div>
  ),
  iconAnchor: [15, 30]
})

class MapMarker extends React.Component<Props, State> {
  state = {
    clicked: false
  }

  chooseIcon = () => {
    const { clicked } = this.state
    return clicked ? customIcon : icon
  }

  switchIcon = () => {
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
