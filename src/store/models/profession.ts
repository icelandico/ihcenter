import { types } from "mobx-state-tree"

const ProfessionDetails = types.model("ProfessionDetails", {
  id: types.identifierNumber,
  name: types.string
})

export default ProfessionDetails
