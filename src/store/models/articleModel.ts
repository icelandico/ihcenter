import { types } from "mobx-state-tree"
import {
  IdeaDetails,
  ImageDetails,
  MainIdeaDetails,
  BaseInfoDetails,
  WritingsDetails,
  NationalityDetails
} from "./articleDetails"

export const ArticleModel = types.model("Article", {
  id: types.number,
  name: types.optional(types.string, ""),
  startDate: types.optional(types.maybeNull(types.string), "No Date"),
  endDate: types.optional(types.maybeNull(types.string), "No Date"),
  startCoords: types.maybeNull(types.string),
  wikipediaLink: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  image: types.maybeNull(ImageDetails),
  nationality: types.maybeNull(NationalityDetails),
  type: types.string,
  ident: types.identifier,
  startPlace: types.maybeNull(types.string),
  EndPlace: types.maybeNull(types.string),
  precursor: types.optional(types.array(IdeaDetails), []),
  ideaPrecursor: types.optional(types.array(IdeaDetails), []),
  professions: types.optional(types.array(BaseInfoDetails), []),
  ideas: types.optional(types.array(IdeaDetails), []),
  mainideas: types.optional(types.array(MainIdeaDetails), []),
  writings: types.optional(types.array(WritingsDetails), []),
  influenced: types.optional(
    types.array(
      types.model("Related", {
        id: types.number,
        type: types.string,
        name: types.string
      })
    ),
    []
  ),
  influences: types.optional(
    types.array(
      types.model("Related", {
        id: types.number,
        type: types.string,
        name: types.string
      })
    ),
    []
  ),
  relatedOrg: types.optional(
    types.array(
      types.model("RelatedOrganisations", {
        id: types.number,
        type: types.string,
        name: types.string
      })
    ),
    []
  ),
  relatedPerson: types.optional(
    types.array(
      types.model("RelatedPersons", {
        id: types.number,
        type: types.string,
        name: types.string
      })
    ),
    []
  ),
  relatedEvent: types.optional(
    types.array(
      types.model("RelatedEvent", {
        id: types.number,
        type: types.string,
        name: types.string
      })
    ),
    []
  )
})