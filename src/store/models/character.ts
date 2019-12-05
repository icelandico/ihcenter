import { types, Instance, cast, flow } from "mobx-state-tree"
import { apiUrls } from "../api/api"

export type CharacterModel = Instance<typeof Character>
export type CharacterListModel = Instance<typeof CharacterList>

export const Character = types.model("Character", {
  id: types.number,
  fullName: types.optional(types.string, "")
  birth: types.optional(types.string, ""),
  death: types.optional(types.string, ""),
  coords: types.optional(types.string, ""),
  imageUrl: types.optional(types.string, ""),
  wikipediaLink: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  nationality: types.model()
})

export const CharacterList = types
  .model("Characters", {
    characters: types.optional(types.array(Character), []),
    names: "Example Name"
  })
  .actions(self => ({
    // setCharacters(characterList: []) {
    //   self.characters.concat(cast(characterList))
    // },
    getCharacterList: flow(function*() {
      const response = yield fetch("http://localhost:1337/characters")
      const characters = yield response.json()
      self.characters = characters
    })
  }))
