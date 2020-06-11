import { Profession } from "./model-details-types"

export interface ArticleTypes {
  id: number
  startDate: string
  endDate: string
  name: string
  startCoords: string
  imageUrl: string
  description: string
  wikipediaLink: string
  image: any
  nationality: any
  startPlace: string
  EndPlace: string
  precursor: any
  professions?: Profession[]
}
