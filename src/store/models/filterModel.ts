import { Instance, types } from "mobx-state-tree"

export const Filter = types.model("Filter", {
  type: types.string,
  name: types.string,
  state: types.number
})

export type FilterModel = Instance<typeof Filter>
