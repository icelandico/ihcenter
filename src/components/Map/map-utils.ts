interface MapTypes {
  coordinates: [number, number]
  tile: string
  zoom: number
}

export const mapSettings: MapTypes = {
  coordinates: [48.77, 9.18],
  tile: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  zoom: 5
}
