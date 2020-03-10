import { types } from "mobx-state-tree"

const ImageDetails = types.model("ImageDetails", {
  id: types.identifierNumber,
  url: types.string
})

export default ImageDetails
