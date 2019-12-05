import { types, Instance } from "mobx-state-tree"
import { CharacterList, CharacterListModel } from "./models/character"

export type RootStoreModel = Instance<typeof RootStore>

export type RootStoreEnv = {
  characterList: CharacterListModel
}

const RootStore = types.model("RootStore", {
  characterList: CharacterList
})

export default RootStore
