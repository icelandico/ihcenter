import { types } from "mobx-state-tree"

const Character = types.model("Character", {
  id: types.number,
  fullName: types.string,
  birth: types.string,
  death: types.string,
  coords: types.string,
  imageUrl: types.string,
  wikipediaLink: types.string,
  description: types.string,
  nationality: types.model()
})

export const CharacterList = types.optional(types.array(Character), [])

export default Character
