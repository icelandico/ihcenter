import React, { ChangeEvent, FunctionComponent, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import {
  FinderInput,
  FinderResultsContainer,
  FinderContainer,
  SingleResult,
} from "./finder-styles"
import { ArticleModel } from "../../store/models/article"

interface Props {
  store?: typeof rootStore
}

const Finder: FunctionComponent<Props> = props => {
  const [results, setResults] = useState<ArticleModel[]>([])
  const { store } = props

  const handleInputChange = (e: ChangeEvent) => {
    const eventTarget = e.currentTarget as HTMLInputElement
    const finderValue = eventTarget.value.toLowerCase()
    const results = store.articleStore.articles.filter(el =>
      el.name.toLowerCase().includes(finderValue)
    )
    finderValue.length >= 3 ? setResults(results) : setResults([])
  }

  const renderResults = () => {
    return (
      <FinderResultsContainer>
        {results.map(el => {
          return <SingleResult type={el.type}>{el.name}</SingleResult>
        })}
      </FinderResultsContainer>
    )
  }

  return (
    <FinderContainer>
      <FinderInput
        type="text"
        placeholder="Search"
        onChange={e => handleInputChange(e)}
      />
      {results.length >= 1 && renderResults()}
    </FinderContainer>
  )
}

export default inject("store")(observer(Finder))
