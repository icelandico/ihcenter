import { Instance, types } from "mobx-state-tree"

export const Filter = types.model("Filter", {
  type: types.string,
  name: types.string,
  state: types.number,
  id: types.optional(types.number, 0)
})

export type FilterModel = Instance<typeof Filter>
