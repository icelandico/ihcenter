import * as React from "react"
import { LoaderC, LoaderContainer } from "./loader-styles"

interface Props {
  transparent?: boolean
}

const Loader: React.FC<Props> = () => {
  return (
    <LoaderContainer>
      <LoaderC />
    </LoaderContainer>
  )
}

export default Loader
