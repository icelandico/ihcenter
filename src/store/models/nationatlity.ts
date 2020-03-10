import { types } from "mobx-state-tree"

const NationalityDetails = types.model("NationalityDetails", {
  id: types.identifierNumber,
  name: types.string
})

export default NationalityDetails
