import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from '../../Components/Loading'
import Page from '../../Components/Page'
import WordCard from '../../Components/WordCard'
import { Words } from '../../context'
import Request from '../Request'

const WordDisplay = () => {
  const { _id } = useParams()
  const { words } = useContext(Words.Context)
  const [thisWord, setThisWord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // TODO: Handle Errors (e.g. no matching _id)
  useEffect(() => {
    console.log('words', words)
    // making sure the api has been fetched
    // without if block the app may attempt to find a match inside of a blank array, before API has returned response
    if (words.length > 0) {
      const word = words.find((el) => el._id === _id)
      console.log(word)
      setThisWord(word)
      setIsLoading(false)
    }
  }, [_id, words])
  // TODO: implement loading
  if (isLoading) {
    return <Loading />
  } else {
    if (thisWord === undefined) {
      return <Request />
    }
    return (
      <Page>
        <WordCard word={thisWord} expanded={true} />
        {/* <WordPaper>
          <WordGrid>
            {thisWord.images.length > 0 ? (
              <ContentImage href={thisWord.images[0]}>
                {thisWord.recordings.length > 0 ? (
                  <Player base64={thisWord.recordings[0]} />
                ) : null}
              </ContentImage>
            ) : null}
            <InfoContainer>
              <Sound data={thisWord.recordings} />
              <WordEntry data={thisWord.language_entry} />
              <Pronunciations data={thisWord.pronunciation[0]} />
              <Translations data={thisWord.translations[0]} />
              <AltSpellings data={thisWord.alternative_spellings} />
              <Notes data={thisWord.notes} />
            </InfoContainer>
            <TagContainer>
              <Tags data={thisWord.tags} />
            </TagContainer>
          </WordGrid>
          <Id>{thisWord._id}</Id>
        </WordPaper> */}
      </Page>
    )
  }
}

export default WordDisplay
