import React, { FunctionComponent } from "react"
import { LoaderElements, LoaderContainer } from "./loader-styles"

interface IProps {
  regular?: boolean
  background?: boolean
}

const Loader: FunctionComponent<IProps> = props => {
  const { background, regular } = props
  return (
    <LoaderContainer regular={regular} background={background}>
      <LoaderElements />
    </LoaderContainer>
  )
}

export default Loader
