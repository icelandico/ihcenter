import { types, Instance, flow, applySnapshot } from "mobx-state-tree"
import { apiEndpoints } from "../api/api"
import {
  IdeaDetails,
  ImageDetails,
  MainIdeaDetails,
  BaseInfoDetails,
  WritingsDetails
} from "./articleDetails"
import { getYear } from "../../utils/formatDate"

export type ArticleModel = Instance<typeof Article>

export const Article = types.model("Article", {
  id: types.number,
  name: types.optional(types.string, ""),
  startDate: types.optional(types.maybeNull(types.string), "No Date"),
  endDate: types.optional(types.maybeNull(types.string), "No Date"),
  startCoords: types.maybeNull(types.string),
  wikipediaLink: types.maybeNull(types.string),
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

const ArticleStore = types
  .model("ArticleStore", {
    articles: types.optional(types.array(Article), []),
    chosenArticle: types.maybe(types.reference(Article)),
    currentYear: types.optional(types.number, 1775)
  })
  .actions(self => ({
    getAllArticles: flow(function*() {
      const response = yield Promise.all(
        apiEndpoints.map(url => fetch(url).then(response => response.json()))
      )
      const articles = response.reduce(
        (prevSet: [], nextSet: []) => prevSet.concat(nextSet),
        []
      )
      const articlesWithIds = articles.map((el: ArticleModel) => ({
        ...el,
        ident: `${el.type}-${el.id}`
      }))
      applySnapshot(self.articles, articlesWithIds)
    }),
    toggle(article: ArticleModel) {
      self.chosenArticle = article
    },
    incrementYear() {
      self.currentYear += 1
      this.filterByYear()
    },
    decrementYear() {
      self.currentYear -= 1
      this.filterByYear()
    },
    setYear(year: string) {
      self.currentYear = parseInt(year, 10)
      this.filterByYear()
    },
    filterByYear() {
      console.log("Current articles", self.articles)
      const filteredArticles = self.articles.filter(article => {
        const articleYear = getYear(article.startDate)
        return articleYear === 1772
      })
      console.log("Current year", self.currentYear)
      console.log("Filtered", filteredArticles)
      applySnapshot(self.articles, filteredArticles)
    }
  }))

export default ArticleStore
