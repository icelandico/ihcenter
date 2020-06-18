import { types } from "mobx-state-tree"

export const IdeaDetails = types.model("IdeaDetails", {
  id: types.identifierNumber,
  name: types.string,
  wikipediaLink: types.string
})

export const ImageDetails = types.model("ImageDetails", {
  id: types.identifierNumber,
  url: types.string
})

export const ProfessionDetails = types.model("ProfessionDetails", {
  id: types.identifierNumber,
  name: types.string
})