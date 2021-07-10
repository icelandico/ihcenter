import React, { FunctionComponent } from "react"
import { useEffect, useState } from "react"
import { Indicator } from "./scroll-indicator-styles"
import { checkIfScrollable } from "../../../utils/scrollableElement"
import { Options } from "./scroll-indicator.model"
import { BottomGradient } from "../Styles/shared-styled-components";

interface IProps {
  container?: HTMLElement
  options?: Options
}

export const ScrollIndicator: FunctionComponent<IProps> = ({
  container,
  options
}) => {
  const [isScrollNeeded, setScrollValue] = useState<boolean>(true)
  const [isScrollable, setScrollable] = useState<boolean>(false)

  const handleScroll = (): void => {
    const scrollDiv = container
    const result =
      scrollDiv.scrollTop < scrollDiv.scrollHeight - scrollDiv.clientHeight ||
      scrollDiv.scrollTop === 0

    setScrollValue(result)
  }

  useEffect(() => {
    setScrollable(checkIfScrollable(container))
    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [container, handleScroll])

  return (
    isScrollable &&
    isScrollNeeded && (
      <>
        <Indicator options={options} />
        { !(container.scrollTop === container.scrollHeight - container.clientHeight) && <BottomGradient /> }
      </>
    )
  )
}
