import { types } from "mobx-state-tree"

const ImageDetails = types.model("Image", {
  id: types.identifierNumber,
  url: types.string
})

export default ImageDetails
