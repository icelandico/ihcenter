import React, { FunctionComponent } from "react"
import {
  CheckboxExcluded,
  CheckboxIncluded,
  CheckmarkContainer,
  Checkbox
} from "./checkmark-styles"

interface IProps {
  mode: string
  scale?: number
}

const Checkmark: FunctionComponent<IProps> = props => {
  const { mode, scale } = props
  return (
    <CheckmarkContainer>
      <Checkbox />
      {mode === "on" ? (
        <CheckboxIncluded scale={scale} />
      ) : (
        <CheckboxExcluded scale={scale} />
      )}
    </CheckmarkContainer>
  )
}

export default Checkmark
