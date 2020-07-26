import * as React from "react"
import { LoaderElements, LoaderContainer } from "./loader-styles"

interface Props {
  regular?: boolean
  background?: boolean
}

const Loader: React.FC<Props> = props => {
  const { background, regular } = props
  return (
    <LoaderContainer regular={regular} background={background}>
      <LoaderElements />
    </LoaderContainer>
  )
}

export default Loader
