import { types, Instance, flow, applySnapshot } from "mobx-state-tree"
import { apiUrls } from "../api/api"
import ImageDetails from "./image"
import IdeaDetails from "./idea"

export type ArticleModel = Instance<typeof Article>
export type ArticleListModel = Instance<typeof ArticleStore>

export const Article = types.model("Article", {
  id: types.identifierNumber,
  name: types.optional(types.string, ""),
  startDate: types.optional(types.maybeNull(types.string), "No Date"),
  endDate: types.optional(types.maybeNull(types.string), "No Date"),
  startCoords: types.maybeNull(types.string),
  imageUrl: types.maybeNull(types.string),
  wikipediaLink: types.optional(types.string, ""),
  description: types.maybeNull(types.string),
  image: types.union(ImageDetails, types.maybeNull(types.number)),
  nationality: types.union(
    types.model({
      id: types.identifierNumber,
      name: types.maybeNull(types.string),
      flag: types.union(
        types.model({
          id: types.identifierNumber,
          url: types.maybeNull(types.string)
        }),
        types.maybeNull(types.number)
      )
    }),
    types.maybeNull(types.number)
  ),
  startPlace: types.maybeNull(types.string),
  EndPlace: types.maybeNull(types.string),
  precursor: types.optional(types.array(IdeaDetails), [])
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
