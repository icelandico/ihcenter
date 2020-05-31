interface MapTypes {
  coordinates: [number, number]
  defaultTile: string
  mainTile: string
  zoom: number
  osmTile: string
}

export const mapSettings: MapTypes = {
  coordinates: [49.75, 6.66],
  defaultTile: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  mainTile:
    "https://api.mapbox.com/styles/v1/icelandic/cjyx6gn4d0kda1cmfa6zicbx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWNlbGFuZGljIiwiYSI6ImNpZ213MWNxdTAwMTFsdWt0MjNvaWlobGQifQ.li8dcAHVjUn27-A70FgeAQ",
  zoom: 5,
  osmTile: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
}
