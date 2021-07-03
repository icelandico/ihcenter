import React, {
  ChangeEvent,
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  ReactElement
} from "react"
import { inject, observer } from "mobx-react"
import { rootStore } from "../../store/RootStore"
import {
  FinderInput,
  FinderResultsContainer,
  FinderContainer,
  SingleResult,
  ResultText,
  ClearInput,
  ResultIcon
} from "./finder-styles"
import { ArticleModel } from "../../store/models/article"
import SvgIcon from "../shared/SvgIcon/svgIcon"
import { ReactUtils } from "../../utils/chooseIcon"

interface Props {
  store?: typeof rootStore
}

const Finder: FunctionComponent<Props> = ({ store }) => {
  const [finderValue, setFinderValue] = useState<string>("")
  const [results, setResults] = useState<ArticleModel[]>([])
  const [resultsVisible, setResultsVisible] = useState<boolean>(false)
  const resultsRef = useRef(null)
  const reactUtils = ReactUtils

  useEffect(() => {
    const handleOutsideClick = (ev: Event) => {
      if (resultsRef.current && !resultsRef.current.contains(ev.target)) {
        setResultsVisible(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [resultsRef])

  const handleInputChange = (e: ChangeEvent): void => {
    const eventTarget = e.currentTarget as HTMLInputElement
    const finderValue = eventTarget.value
    setFinderValue(finderValue)
    const results = store.articleStore.articles.filter(el =>
      el.name.toLowerCase().includes(finderValue.trim().toLowerCase())
    )
    if (finderValue.length >= 3 && results.length >= 1) {
      setResults(results)
      setResultsVisible(true)
      return
    }
    setResults([])
    setResultsVisible(false)
  }

  const setArticle = (article: ArticleModel): void => {
    setResultsVisible(false)
    setFinderValue("")
    store.articleStore.toggle(article.identifier)
    setResults([])
  }

  const renderResults = (): ReactElement => {
    return (
      <FinderResultsContainer ref={resultsRef}>
        {results.map(el => {
          return (
            <SingleResult type={el.type} onClick={() => setArticle(el)}>
              <ResultIcon>
                <SvgIcon Icon={reactUtils.chooseIcon(el.type)} />
              </ResultIcon>
              <ResultText>{el.name}</ResultText>
            </SingleResult>
          )
        })}
      </FinderResultsContainer>
    )
  }

  const handleClear = (): void => {
    setFinderValue("")
    setResults([])
  }

  return (
    <FinderContainer>
      <FinderInput
        type="text"
        placeholder="Search"
        onChange={e => handleInputChange(e)}
        // onBlur={() => setResultsVisible(false)}
        onFocus={() => setResultsVisible(true)}
        value={finderValue}
      />
      { finderValue.length >= 3 && <ClearInput onClick={() => handleClear()} /> }
      {resultsVisible && renderResults()}
    </FinderContainer>
  )
}

export default inject("store")(observer(Finder))
