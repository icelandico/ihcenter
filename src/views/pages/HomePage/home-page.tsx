import * as React from "react"
import { Link } from "react-router-dom"
import { Home } from "./home-page-styles"
import MapComponent from "../../../components/Map/map"

class HomePage extends React.Component {
  render() {
    return (
      <Home>
        <MapComponent />
      </Home>
    )
  }
}

export default HomePage
