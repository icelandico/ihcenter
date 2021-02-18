import { types } from "mobx-state-tree"

export const Filter = types.model("Filter", {
  type: types.string,
  name: types.string
})
