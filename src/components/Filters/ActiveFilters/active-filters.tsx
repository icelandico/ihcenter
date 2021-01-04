import React, { FunctionComponent, useState } from "react"
import { ActiveFiltersContainer} from "./active-filters-styles"

const ActiveFilters: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("")
  const filterTypes = ["nationality", "fields", "current"]

  return (
    <ActiveFiltersContainer>

    </ActiveFiltersContainer>
  )
}

export default ActiveFilters
