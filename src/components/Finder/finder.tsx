import React, { ChangeEvent, FunctionComponent, useState } from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import {
  FinderInput,
  FinderResultsContainer,
  FinderContainer,
  SingleResult,
  ResultText,
} from "./finder-styles"
import { ArticleModel } from "../../store/models/article"

interface Props {
  store?: typeof rootStore
}

const Finder: FunctionComponent<Props> = props => {
  const [results, setResults] = useState<ArticleModel[]>([])
  const [resultsVisible, setResultsVisible] = useState<boolean>(false)
  const { store } = props

  const handleInputChange = (e: ChangeEvent) => {
    const eventTarget = e.currentTarget as HTMLInputElement
    const finderValue = eventTarget.value.toLowerCase()
    const results = store.articleStore.articles.filter(el =>
      el.name.toLowerCase().includes(finderValue)
    )
    if (finderValue.length >= 3 && results.length >= 1) {
      setResults(results)
      setResultsVisible(true)
      return
    }
    setResults([])
    setResultsVisible(false)
  }

  const renderResults = () => {
    return (
      <FinderResultsContainer>
        {results.map(el => {
          return (
            <SingleResult type={el.type}>
              <ResultText>{el.name}</ResultText>
            </SingleResult>
          )
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
        onBlur={() => setResultsVisible(false)}
        onFocus={() => setResultsVisible(true)}
      />
      {resultsVisible && renderResults()}
    </FinderContainer>
  )
}

export default inject("store")(observer(Finder))
