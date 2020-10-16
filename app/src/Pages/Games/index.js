import React, { useContext, useEffect, useState } from 'react'
import Page from '../../Components/Page'
import { Words } from '../../context'
import SelectEnglish from './SelectEnglish'

// TODO: create GameContext
// TODO: progress bar
// TODO: mobile first

const Game = () => {
  const { words } = useContext(Words.Context)
  const [lesson, setLesson] = useState([])
  useEffect(() => {
    const randomArr = words.sort((word) => Math.random() >= 0.5)
    // setLesson to first 10 words
    setLesson(() => randomArr.slice(0, 10))
  }, [words])
  return (
    <Page title='practice'>
      <SelectEnglish lesson={lesson} />
    </Page>
  )
}

export default Game
