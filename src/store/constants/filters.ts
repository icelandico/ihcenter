import { types } from "mobx-state-tree"
import { getYear } from "../../utils/formatDate"
import { FilterModel } from "../models/filterModel"

export const SHOW_ALL = "show_all"
export const BY_YEAR = "by_year"
export const CUMULATIVE = "cummulative"
export const CUSTOM = "custom"
export const filterType = types.union(
  ...[SHOW_ALL, BY_YEAR, CUMULATIVE, CUSTOM].map(types.literal)
)

interface IFilters {
  [key: string]: Function
}

export const FILTERS: IFilters = {
  [SHOW_ALL]: () => true,
  [BY_YEAR]: (year?: number) => {
    return (article: any) => {
      const articleYear = getYear(article.startDate)
      return articleYear === year
    }
  },
  [CUMULATIVE]: (year?: number) => {
    return (article: any) => {
      const articleYear = getYear(article.startDate)
      return articleYear <= year
    }
  }
  // [CUSTOM]: (filters: FilterModel[]) => {
  // }
}
