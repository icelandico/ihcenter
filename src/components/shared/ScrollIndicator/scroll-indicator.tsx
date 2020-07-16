import * as React from "react"
import { useEffect, useState } from "react"
import { Indicator } from "./scroll-indicator-styles"
import { checkIfScrollable } from "../../../utils/scrollableElement"

interface Props {
  container?: HTMLElement
}

export const ScrollIndicator: React.FC<Props> = props => {
  const { container } = props
  const [isScrollNeeded, setScrollValue] = useState(false)
  const [isScrollable, setScrollable] = useState(false)

  const handleScroll = (): void => {
    const scrollDiv = container
    const result =
      scrollDiv.scrollTop < scrollDiv.scrollHeight - scrollDiv.clientHeight ||
      scrollDiv.scrollTop === 0

    setScrollValue(result)
  }

  useEffect(() => {
    console.log("HOOK CALLED", checkIfScrollable(container))
    setScrollable(checkIfScrollable(container))
    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [container, handleScroll])
  return isScrollable && isScrollNeeded && <Indicator />
}
