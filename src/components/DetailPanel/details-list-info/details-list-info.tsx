import * as React from "react"
import { observer, inject } from "mobx-react"
import { useEffect, useRef, useState } from "react"
import { rootStore } from "../../../store/RootStore"
import { ArticleModel } from "../../../store/models/article"
import { TabGenerator } from "../details-info-tab/details-info-tab-specific"
import { ScrollIndicator } from "../../shared/ScrollIndicator/scroll-indicator"
import { checkIfScrollable } from "../../../utils/scrollableElement"

export interface Props {
  store?: typeof rootStore
  details: ArticleModel
}

const renderTypeDetails = (details: ArticleModel): JSX.Element => {
  const tabGenerator = new TabGenerator(details)
  const { type } = details
  switch (type) {
    case "person":
      return tabGenerator.renderPerson()
    case "event":
      return tabGenerator.renderEvent()
    case "organisation":
      return tabGenerator.renderOrganisation()
    default:
      return tabGenerator.renderPerson()
  }
}

const DetailListInfo: React.FC<Props> = props => {
  const [isScrolled, setScrollValue] = useState(false)
  const [isScrollable, setScrollable] = useState(false)
  const container = useRef(null)

  useEffect(() => {
    if (!container.current) return null
    const checkScrollTop = (): void => {
      if (container.current.scrollTop > 0) {
        setScrollValue(true)
      } else {
        setScrollValue(false)
      }
    }
    setScrollable(checkIfScrollable(container.current))
    container.current.addEventListener("scroll", checkScrollTop)
    return () => container.current.removeEventListener("scroll", checkScrollTop)
  })

  const { details } = props
  return (
    <div
      ref={container}
      className="content-list-info content-list-info-detailed"
    >
      {details && renderTypeDetails(details)}
      {!isScrolled && isScrollable && <ScrollIndicator />}
    </div>
  )
}

export default inject("store")(observer(DetailListInfo))
