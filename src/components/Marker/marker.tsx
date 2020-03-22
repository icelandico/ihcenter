import * as React from "react"
import { Marker } from "react-leaflet"
import { observer, inject } from "mobx-react"
import L from "leaflet"
import ReactDOMServer from "react-dom/server"
import { rootStore } from "../../store/RootStore"
import { icon } from "../MapIcons/map-icon"
import DefaultIcon from "../../static/icons/person.svg"
import { ArticleTypes } from "../../types/models-types"
import { apiUrls } from "../../store/api/api"

interface Props {
  store?: typeof rootStore
  article: ArticleTypes
  key: number
  position: [number, number]
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
            backgroundImage: `url(${
              this.props.article && this.props.article.image
                ? `${apiUrls.baseUrl}${this.props.article.image.url}`
                : DefaultIcon
            })`
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
    const { article } = this.props
    const { store } = this.props
    store.articleStore.toggle(article)
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
