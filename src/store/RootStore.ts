import { types } from "mobx-state-tree"
import ArticleStore from "./models/article"

const RootStore = types.model("RootStore", {
  articleStore: types.optional(ArticleStore, {})
})

export const rootStore = RootStore.create()
