import { types, Instance, flow, applySnapshot, cast } from "mobx-state-tree"
import { apiEndpoints } from "../api/api"
import { ArticleModel } from "./articleModel"
import {
  FILTERS,
  SHOW_ALL,
  filterType,
  BY_YEAR,
  CUMULATIVE,
  CUSTOM
} from "../constants/filters"
import { getYear } from "../../utils/formatDate"
import { UserBookmark, IUserBookmark } from "./articleDetails"
import { Filter, FilterModel} from "./filterModel"

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
    activeFilters: types.optional(types.array(Filter), [])
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
    toggle(article: ArticleModel) {
      this.insertInStorage(article.identifier)
      self.chosenArticle = article
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
    },
    setUserBookmarks(newBookmarks: IUserBookmark[]): void {
      self.userBookmarks = cast(newBookmarks)
    },
    getCurrentState(name: string, type: string): number {
      const activeIndex = self.activeFilters.findIndex(
        element => element.name === name && element.type === type
      )
      return activeIndex !== -1 ? self.activeFilters[activeIndex].state : 0
    },
    removeFilter(filter: FilterModel) {
      const activeIndex = self.activeFilters.findIndex(
        element => element.name === filter.name && element.type === filter.type
      )
      applySnapshot(
        self.activeFilters,
        self.activeFilters.filter((filter, index) => index !== activeIndex)
      )
    },
    insertFilter(filter: FilterModel) {
      applySnapshot(self.activeFilters, self.activeFilters.concat(filter))
      console.log('filters', self.activeFilters)
    },
    changeFilterState(filter: FilterModel) {
      const activeIndex = self.activeFilters.findIndex(
        element => element.name === filter.name && element.type === filter.type
      )
      self.activeFilters.splice(activeIndex, 1, {
        ...self.activeFilters[activeIndex],
        state: filter.state
      })
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
        case FILTERS[CUSTOM]:
          return self.articles.filter(currentFilter(self.activeFilters))
        default:
          return self.articles
      }
    }
  }))

export default ArticleStore
