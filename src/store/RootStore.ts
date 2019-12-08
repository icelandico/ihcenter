import { types } from "mobx-state-tree"
import CharacterStore from "./models/character"

const RootStore = types.model("RootStore", {
  characterStore: types.optional(CharacterStore, {})
})

export const rootStore = RootStore.create()
