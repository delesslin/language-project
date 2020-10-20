import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Page from '../../Components/Page'
import Spinner from '../../Components/Spinner'
import useAPI from '../../utils/hooks/useAPI'
import Request from '../Request'
import Hero from './Hero'
import Detail from './Detail'
import Tags from './Tags'
const WordDisplay = () => {
  const { _id } = useParams()
  const history = useHistory()
  const { words } = useAPI()
  const [thisWord, setThisWord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // TODO: Handle Errors (e.g. no matching _id)
  useEffect(() => {
    // making sure the api has been fetched
    // without if block the app may attempt to find a match inside of a blank array, before API has returned response
    if (words.length > 0) {
      const word = words.find((el) => el._id === _id)

      setThisWord(word)
      setIsLoading(false)
    }
  }, [_id, words])
  const handleNext = () => {
    setIsLoading(true)
    const newWord = words[Math.floor(Math.random() * words.length) - 1]

    const url = `/word/${newWord._id}`

    history.push(url)
    setIsLoading(false)
  }
  if (isLoading) {
    return (
      <Page>
        <Spinner />
      </Page>
    )
  } else {
    if (thisWord === undefined) {
      return <Request />
    }
    return (
      <Page>
        <Hero word={thisWord} handleIncrement={handleNext} />
        <Detail word={thisWord} />
        <Tags tags={thisWord.tags} />
      </Page>
    )
  }
}

export default WordDisplay
