import { types, Instance, flow, applySnapshot } from "mobx-state-tree"
import { apiEndpoints } from "../api/api"
import {
  IdeaDetails,
  ImageDetails,
  MainIdeaDetails,
  BaseInfoDetails,
  WritingsDetails, NationalityDetails
} from "./articleDetails"
import {FILTERS, SHOW_ALL, filterType, BY_YEAR, CUMULATIVE} from "../constants/filters"

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

const ArticleStore = types
  .model("ArticleStore", {
    articles: types.optional(types.array(Article), []),
    chosenArticle: types.maybe(types.reference(Article)),
    currentYear: types.optional(types.number, 0),
    filter: types.optional(filterType, CUMULATIVE),
    firstYear: types.optional(types.number, 0),
    lastYear: types.optional(types.number, 0)
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
    },
    decrementYear() {
      self.currentYear -= 1
    },
    setYear(year: string) {
      self.currentYear = parseInt(year, 10)
    },
    setFilter(mode: string) {
      self.filter = mode
    },
    setYearsRange(): void {
      const allArticles = self.articles
      const articleDates = allArticles
        .filter(el => el.startDate)
        .map(el => new Date(el.startDate))
      const lastYear: number = new Date(
        Math.max(...(articleDates as []))
      ).getFullYear()
      const firstYear: number = new Date(
        Math.min(...(articleDates as []))
      ).getFullYear()
      self.lastYear = lastYear
      self.firstYear = firstYear
      self.currentYear = lastYear
    }
  }))
  .views(self => ({
    get filteredStore() {
      const currentFilter: Function = FILTERS[self.filter]
      switch (currentFilter) {
        case FILTERS[SHOW_ALL]:
          return self.articles
        case FILTERS[BY_YEAR]:
          return self.articles.filter(currentFilter(self.currentYear))
        case FILTERS[CUMULATIVE]:
          return self.articles.filter(currentFilter(self.currentYear))
        default:
          return self.articles
      }
    }
  }))

export default ArticleStore
