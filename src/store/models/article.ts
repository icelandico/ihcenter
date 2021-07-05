import { types, Instance, flow, applySnapshot, cast } from "mobx-state-tree"
import { apiEndpoints } from "../api/api"
import { ArticleModel } from "./articleModel"
import {
  FILTERS,
  filterType,
  BY_YEAR,
  CUMULATIVE,
} from "../constants/filters"
import { getYear } from "../../utils/formatDate"
import { UserBookmark, IUserBookmark } from "./articleDetails"
import { FilterModel, FiltersSet, FiltersTime } from "./filterModel"

export type ArticleModel = Instance<typeof Article>

export const Article = types.maybeNull(ArticleModel)

const ArticleStore = types
  .model("ArticleStore", {
    articles: types.optional(types.array(Article), []),
    chosenArticle: types.maybe(types.reference(Article)),
    currentYear: types.optional(types.number, 0),
    filter: types.optional(filterType, CUMULATIVE),
    firstYear: types.maybeNull(types.number),
    lastYear: types.maybeNull(types.number),
    userBookmarks: types.optional(types.array(UserBookmark), []),
    recentlyViewed: types.optional(types.array(UserBookmark), []),
    activeFilters: types.optional(FiltersSet, { time: "CUMULATIVE", parameters: [] })
  })
  .actions(self => ({
    getAllArticles: flow(function*() {
      const response = yield fetch(apiEndpoints.getArticles).then(response =>
        response.json()
      )
      const articlesWithIds = response.map((el: ArticleModel) => ({
        ...el,
        identifier: `${el.type}-${el.id}`
      }))
      const sortedArticles = articlesWithIds.sort(
        (a: ArticleModel, b: ArticleModel) => getYear(a.startDate) - getYear(b.startDate)
      )
      applySnapshot(self.articles, sortedArticles)
    }),
    getBookmarsFromStore() {
      const storeBookmarks =
        JSON.parse(window.localStorage.getItem("userBookmarks")) || []
      applySnapshot(self.userBookmarks, storeBookmarks)
    },
    getRecentlyViewedFromStore() {
      const recentlyViewedItems =
        JSON.parse(window.localStorage.getItem("recentlyViewedItems")) || []
      applySnapshot(self.recentlyViewed, recentlyViewedItems)
    },
    insertInStorage(item: string) {
      const storageItems =
        JSON.parse(window.localStorage.getItem("recentlyViewedItems")) || []
      const newItems = storageItems.concat({ id: item })
      window.localStorage.setItem(
        "recentlyViewedItems",
        JSON.stringify(newItems)
      )
      self.recentlyViewed = newItems
    },
    toggle(identifier: string) {
      const chosenArticle = self.articles.find(
        article => article.identifier === identifier
      )
      if (chosenArticle) {
        self.chosenArticle = chosenArticle
        this.insertInStorage(identifier)
        return
      } 
      alert("Article not found!")
    },
    incrementYear() {
      self.currentYear + 1 > self.lastYear
        ? self.currentYear = self.lastYear
        : (self.currentYear += 1)
    },
    decrementYear() {
      self.currentYear - 1 < self.firstYear
        ? self.currentYear = self.firstYear
        : self.currentYear -= 1
    },
    setYear(year: number) {
      if (year > self.lastYear) {
        self.currentYear = self.lastYear
      } else if (year < self.firstYear) {
        self.currentYear = self.firstYear
      } else {
        self.currentYear = year
      }
    },
    setFilter(mode: FiltersTime) {
      self.activeFilters.time = mode
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
    },
    setUserBookmarks(newBookmarks: IUserBookmark[]): void {
      self.userBookmarks = cast(newBookmarks)
    },
    getCurrentState(name: string, type: string): number {
      const activeIndex = self.activeFilters.parameters.findIndex(
        element => element.name === name && element.type === type
      )
      return activeIndex !== -1
        ? self.activeFilters.parameters[activeIndex].state
        : 0
    },
    removeFilter(filter: FilterModel) {
      const activeIndex = self.activeFilters.parameters.findIndex(
        element => element.name === filter.name && element.type === filter.type
      )
      applySnapshot(
        self.activeFilters.parameters,
        self.activeFilters.parameters.filter((filter, index) => index !== activeIndex)
      )
    },
    insertFilter(filter: FilterModel) {
      applySnapshot(
        self.activeFilters.parameters,
        self.activeFilters.parameters.concat(filter)
      )
    },
    changeFilterState(filter: FilterModel) {
      const activeIndex = self.activeFilters.parameters.findIndex(
        element => element.name === filter.name && element.type === filter.type
      )
      const updatedFilters = self.activeFilters.parameters.map((currentFilter, index) => index === activeIndex ? {...currentFilter, state: filter.state } : currentFilter)
      applySnapshot(self.activeFilters.parameters, updatedFilters)
    }
  }))
  .views(self => ({
    get filteredStore() {
      const currentTimeFilter: string = self.activeFilters.time
      const currentFilterParams = self.activeFilters.parameters.filter(filter => filter.type !== "type")
      const currentTypeFilterParams = self.activeFilters.parameters.filter(filter => filter.type === "type")

      const filteredByParams = self.articles.filter(article =>
        currentFilterParams.every(filter => {
          if (filter.type === "nationalities" && article.nationality) {
            if (filter.state === 1) return article.nationality.name === filter.name
            if (filter.state === 2) return article.nationality.name !== filter.name
          }
          if (filter.type === "mainideas" && article.mainideas) {
            if (filter.state === 1) return article.mainideas.some(el => el.name === filter.name)
            if (filter.state === 2) return article.mainideas.every(el => el.name !== filter.name)
          }
          if (filter.type === "professions" && article.professions) {
            if (filter.state === 1) return article.professions.some(el => el.name === filter.name)
            if (filter.state === 2) return article.professions.every(el => el.name !== filter.name)
          }
        })
      )

      const filteredByType =
        currentTypeFilterParams.length > 0
          ? filteredByParams.filter(article =>
              currentTypeFilterParams.every(
                filter => article.type !== filter.name
              )
            )
          : filteredByParams

      if (currentTimeFilter === "CUMULATIVE") {
        return filteredByType.filter(FILTERS[CUMULATIVE](self.currentYear))
      }
      if (currentTimeFilter === "BY_YEAR") {
        return filteredByType.filter(FILTERS[BY_YEAR](self.currentYear))
      }
      return self.articles
    }
  }))

export default ArticleStore
