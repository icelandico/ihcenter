import * as React from "react"
import { LoaderElements, LoaderContainer } from "./loader-styles"

interface Props {
  transparent?: boolean
}

const Loader: React.FC<Props> = () => {
  return (
    <LoaderContainer>
      <LoaderElements />
    </LoaderContainer>
  )
}

export default Loader
