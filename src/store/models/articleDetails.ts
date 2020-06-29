import { types } from "mobx-state-tree"

export const IdeaDetails = types.model("IdeaDetails", {
  id: types.identifierNumber,
  name: types.string,
  wikipediaLink: types.string
})

export const MainIdeaDetails = types.model("MainIdeaDetails", {
  id: types.identifierNumber,
  name: types.string,
  description: types.string,
  wikipediaLink: types.string
})

export const ImageDetails = types.model("ImageDetails", {
  id: types.identifierNumber,
  url: types.string
})

export const BaseInfoDetails = types.model("BaseInfoDetails", {
  id: types.identifierNumber,
  name: types.string
})

export const WritingsDetails = types.model("WritingsDetails", {
  id: types.identifierNumber,
  title: types.string,
  description: types.string,
  publicated: types.maybeNull(types.string),
  fragments: types.maybeNull(types.string)
})
