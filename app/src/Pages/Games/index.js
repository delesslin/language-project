/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { RiGamepadLine } from 'react-icons/ri'
import Page from '../../Components/Page'
import Spinner from '../../Components/Spinner'
import useAPI from '../../utils/hooks/useAPI'
import Finished from './Finished'
import { ProgressBar } from './ProgressBar'
import SelectCatawba from './Exercises/SelectCatawba'
import SelectEnglish from './Exercises/SelectEnglish'
// TODO: create GameContext
// TODO: progress bar
// TODO: mobile first
const Exercises = [SelectCatawba, SelectEnglish]
const randEx = () => Exercises[Math.floor(Math.random() * Exercises.length)]
const Game = () => {
  const { words } = useAPI()
  const [lesson, setLesson] = useState([])
  const [options, setOptions] = useState([])
  const [progress, setProgress] = React.useState(0)
  const [answered, setAnswered] = React.useState(-1)
  const [Exercise, setExercise] = React.useState(() => randEx())
  const next = () => {
    resetOptions()
    setAnswered(-1)
    setExercise(() => randEx())
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
    const randoms = lesson.sort((a, b) => 0.5 - Math.random())

    const newOpts = [randoms[0], randoms[1], randoms[2], randoms[3]]

    setOptions(newOpts)
  }

  const setupLesson = () => {
    const randomArr = words.sort((word) => 0.5 - Math.random())
    // setLesson to first 10 words
    setLesson(() => randomArr.slice(0, 40))

    setProgress(0)
    setAnswered(-1)
  }
  const handleReset = () => {
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
      <Page icon={RiGamepadLine}>
        <Spinner />
      </Page>
    )
  } else {
    if (progress >= 100) {
      return (
        <Page icon={RiGamepadLine}>
          <ProgressBar percent={progress} />
          <Finished reset={handleReset}></Finished>
        </Page>
      )
    }
    return (
      <Page Icon={RiGamepadLine}>
        <ProgressBar percent={progress} />
        <Exercise
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
