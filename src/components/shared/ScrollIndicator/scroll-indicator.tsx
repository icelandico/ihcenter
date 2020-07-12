import * as React from "react"
import { rootStore } from "../../../store/RootStore"
import { ArticleModel } from "../../../store/models/article"
import { Indicator } from "./scroll-indicator-styles";

interface Props {

}

export const ScrollIndicator: React.FC = props => {
  return (
    <Indicator />
  )
}