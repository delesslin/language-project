import { Button, CircularProgress, LinearProgress } from '@material-ui/core'
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
  const [options, setOptions] = useState([])
  const [progress, setProgress] = React.useState(0)
  const [answered, setAnswered] = React.useState(-1)
  const incrementProgress = (x) => {
    if (x < 0) {
      setAnswered(0)
    }
    if (x > 0) {
      setAnswered(1)
    }
    setProgress((prog) => prog + x)
  }
  useEffect(() => {
    if (answered === -1 && lesson.length > 0) {
      const randomArr = lesson.sort(() => Math.random() >= 0.5)
      setOptions(() => randomArr.slice(0, 4))
    }
  }, [answered, lesson])
  const setupLesson = () => {
    const randomArr = words.sort((word) => Math.random() >= 0.5)
    // setLesson to first 10 words
    setLesson(() => randomArr.slice(0, 10))
    setProgress(0)
    setAnswered(-1)
  }
  useEffect(() => {
    setupLesson()
  }, [words])
  const handleReset = () => {
    console.log("let's reset")
    setupLesson()
  }
  const next = () => {
    setAnswered(-1)
  }
  if (lesson.length < 1) {
    return (
      <Page title='practice'>
        <CircularProgress />
      </Page>
    )
  } else {
    if (progress >= 100) {
      return (
        <Page title='practice'>
          <LinearProgress variant='determinate' value={progress} />
          <div>
            <h4>You finished!</h4>
          </div>
          <Button onClick={handleReset}>PLAY ANOTHER GAME</Button>
        </Page>
      )
    }
    return (
      <Page title='practice'>
        <LinearProgress variant='determinate' value={progress} />
        <SelectEnglish
          options={options}
          onAnswer={incrementProgress}
          status={answered}
          next={next}
        />
      </Page>
    )
  }
}

export default Game
