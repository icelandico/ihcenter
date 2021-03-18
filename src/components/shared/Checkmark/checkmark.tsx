import React from "react"
import {
  CheckboxExcluded,
  CheckboxIncluded,
  CheckmarkContainer,
  Checkbox
} from "./checkmark-styles"

interface Props {
  mode: string
  scale?: number
}

const Checkmark: React.FC<Props> = props => {
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
