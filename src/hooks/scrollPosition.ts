import React, { useState, useEffect } from "react"

export const ScrollPosition = (container: any) => {
  const [isScrolled, setScrollValue] = useState(false)

  useEffect(() => {
    if (!container.current) return null
    const checkScrollTop = (): boolean => {
      return container.scrollTop > 0
    }

    const checkForScroll = () => {
      setScrollValue(checkScrollTop())
    }
    container.current.addEventListener("scroll", checkForScroll)

    return () => container.current.removeEventListener("scroll", checkForScroll)
  }, [])

  return isScrolled
}
