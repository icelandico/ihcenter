declare module 'react-leaflet-markercluster' {
  import {Component} from 'react' // Switch to 'react' if you use it
  import {MarkerClusterGroupOptions} from 'leaflet'
  
  export default abstract class MarkerClusterGroup extends Component<MarkerClusterGroupOptions> {}
}

