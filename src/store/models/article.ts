import { types, Instance, flow, applySnapshot } from "mobx-state-tree"
import { apiUrls } from "../api/api"

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
  description: types.maybeNull(types.string)
  // nationality: types.model()
})

const ArticleStore = types
  .model("ArticleStore", {
    articles: types.optional(types.array(Article), []),
    chosenArticle: types.maybe(types.reference(Article))
  })
  .actions(self => ({
    getAllArticles: flow(function* () {
      const response = yield fetch(apiUrls.articles)
      const articles = yield response.json()
      applySnapshot(self.articles, articles)
    }),
    toggle(article: ArticleModel) {
      self.chosenArticle = article
    },
    getDate(dateType: string) {
      const matchDate = dateType.match(/\d+/g)
      const date = {
        day: matchDate[2],
        month: matchDate[1],
        year: matchDate[0]
      }
      return date
    }
  }))

export default ArticleStore
