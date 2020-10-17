import { Button, CircularProgress, LinearProgress } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import Page from '../../Components/Page'
import { Words } from '../../context'
import SelectEnglish from './SelectEnglish'
import uniqueRandomArray from 'unique-random-array'
import useAPI from '../../utils/hooks/useAPI'

// TODO: create GameContext
// TODO: progress bar
// TODO: mobile first

const Game = () => {
  const { words } = useAPI()
  const [lesson, setLesson] = useState([])
  const [options, setOptions] = useState([])
  const [progress, setProgress] = React.useState(0)
  const [answered, setAnswered] = React.useState(-1)
  const next = () => {
    resetOptions()
    setAnswered(-1)
  }
  const incrementProgress = (x) => {
    if (x < 0) {
      setAnswered(0)
    }
    if (x > 0) {
      setAnswered(1)
    }
    setProgress((prog) => prog + x)
  }
  const resetOptions = () => {
    const random = uniqueRandomArray(lesson)
    console.log('resetting options')
    const arr = [random(), random(), random(), random()]
    console.log(arr[0])
    setOptions(arr)
  }

  const setupLesson = () => {
    const randomArr = words.sort((word) => Math.random() >= 0.5)
    // setLesson to first 10 words
    setLesson(() => randomArr.slice(0, 10))
    setProgress(0)
    setAnswered(-1)
  }
  const handleReset = () => {
    console.log("let's reset")
    setupLesson()
  }
  useEffect(() => {
    if (answered === -1 && lesson.length > 0) {
      resetOptions()
    }
  }, [answered, lesson])
  useEffect(() => {
    setupLesson()
  }, [words])

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
