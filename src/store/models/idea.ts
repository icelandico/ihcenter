import { types } from "mobx-state-tree"

const IdeaDetails = types.model("IdeaDetails", {
  id: types.identifierNumber,
  name: types.string,
  wikipediaLink: types.string
})

export default IdeaDetails
