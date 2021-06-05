import { Instance, types } from "mobx-state-tree"

export const Filter = types.model("Filter", {
  type: types.string,
  name: types.string,
  state: types.number,
  id: types.optional(types.number, 0)
})

export const FiltersSet = types.model("FiltersSet", {
  time: types.union(types.literal("CUMULATIVE"), types.literal("BY_YEAR")),
  parameters: types.optional(types.array(Filter), [])
})

export type FilterModel = Instance<typeof Filter>
