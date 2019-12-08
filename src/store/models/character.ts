import { types, Instance, cast, flow, applySnapshot } from "mobx-state-tree"
import { apiUrls } from "../api/api"

export type CharacterModel = Instance<typeof Character>
export type CharacterListModel = Instance<typeof CharacterStore>

export const Character = types.model("Character", {
  id: types.number,
  fullName: types.optional(types.string, ""),
  // birth: types.optional(types.string, ""),
  // death: types.optional(types.string, ""),
  coords: types.maybeNull(types.string)
  // imageUrl: types.optional(types.string, ""),
  // wikipediaLink: types.optional(types.string, ""),
  // description: types.optional(types.string, ""),
  // nationality: types.model()
})

const CharacterStore = types
  .model("CharacterStore", {
    characters: types.optional(types.array(Character), [])
  })
  .actions(self => ({
    getAllCharacters: flow(function*() {
      const response = yield fetch(apiUrls.characters)
      const characters = yield response.json()
      applySnapshot(self.characters, characters)
    })
  }))
  .create({
    characters: []
  })

export default CharacterStore
