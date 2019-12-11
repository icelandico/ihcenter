import * as React from "react"
import styled from "styled-components"
import L from "leaflet"

export const icon = L.icon({
  iconUrl: require("./../../static/icons/ZNACZNIK_2.svg"),
  iconSize: [10, 30]
})

export const iconClicked = L.icon({
  iconUrl: require("./../../static/icons/ZNACZNIK_1.svg"),
  iconSize: [30, 50]
})
