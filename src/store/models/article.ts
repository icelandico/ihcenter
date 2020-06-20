import { types, Instance, flow, applySnapshot } from "mobx-state-tree"
import { apiUrls } from "../api/api"
import {
  IdeaDetails,
  ImageDetails,
  MainIdeaDetails,
  ProfessionDetails,
  WritingsDetails
} from "./articleDetails"

export type ArticleModel = Instance<typeof Article>

export const Article = types.model("Article", {
  id: types.identifierNumber,
  name: types.optional(types.string, ""),
  startDate: types.optional(types.maybeNull(types.string), "No Date"),
  endDate: types.optional(types.maybeNull(types.string), "No Date"),
  startCoords: types.maybeNull(types.string),
  wikipediaLink: types.optional(types.string, ""),
  description: types.maybeNull(types.string),
  image: types.maybeNull(ImageDetails),
  nationality: types.maybeNull(
    types.model({
      id: types.identifierNumber,
      name: types.maybeNull(types.string),
      flag: types.maybeNull(
        types.model({
          id: types.identifierNumber,
          url: types.maybeNull(types.string)
        })
      )
    })
  ),
  startPlace: types.maybeNull(types.string),
  EndPlace: types.maybeNull(types.string),
  precursor: types.optional(types.array(IdeaDetails), []),
  professions: types.optional(types.array(ProfessionDetails), []),
  ideas: types.optional(types.array(IdeaDetails), []),
  mainideas: types.optional(types.array(MainIdeaDetails), []),
  writings: types.optional(types.array(WritingsDetails), [])
})

const ArticleStore = types
  .model("ArticleStore", {
    articles: types.optional(types.array(Article), []),
    chosenArticle: types.maybe(types.reference(Article))
  })
  .actions(self => ({
    getAllArticles: flow(function*() {
      const response = yield fetch(apiUrls.articles)
      const articles = yield response.json()
      applySnapshot(self.articles, articles)
    }),
    toggle(article: ArticleModel) {
      self.chosenArticle = article
    }
  }))

export default ArticleStore
