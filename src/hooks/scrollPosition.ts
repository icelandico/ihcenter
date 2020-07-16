import React, { useState, useEffect, useCallback, useLayoutEffect} from "react"
import { checkIfScrollable } from "../utils/scrollableElement"

// export const useScroll = (container: HTMLElement) => {
//   const [isScrollNeeded, setScrollValue] = useState(true)
//   const [isScrollable, setScrollable] = useState(false)
//
//   const checkScrollPosition = useCallback((): void => {
//     const scrollDiv = container
//     const result =
//       scrollDiv.scrollTop < scrollDiv.scrollHeight - scrollDiv.clientHeight ||
//       scrollDiv.scrollTop === 0
//
//     setScrollValue(result)
//     setScrollable(checkIfScrollable(container))
//   }, [container])
//
//   useEffect(() => {
//     if (!container) return null
//
//     container.addEventListener("scroll", checkScrollPosition)
//     setScrollable(checkIfScrollable(container))
//     return () => container.removeEventListener("scroll", checkScrollPosition)
//   }, [container, checkScrollPosition])
//
//   return isScrollNeeded && isScrollable
// }


export const useScroll = (container: HTMLElement) => {
  const isContainerAvailable = !!container

  const [scrollPosition, setScrollPosition] = useState(null)

  useEffect(() => {
    console.log("Container", container)
    const handleScroll = () => setScrollPosition(container.scrollTop)
    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [container])

  return scrollPosition
}
