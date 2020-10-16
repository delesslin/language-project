import { Chip } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const GameGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`
const SelectEnglish = ({ lesson }) => {
  const [options, setOptions] = React.useState([])
  useEffect(() => {
    const randomLesson = lesson.sort(() => Math.random() >= 0.5)
    setOptions(() => randomLesson.slice(0, 4))
  }, [lesson])
  if (options.length < 1) {
    return null
  } else {
    return (
      <GameGrid>
        <h4>
          <b>{options[0].language_entry}</b>
        </h4>
        <div>
          {options.map((entry) => {
            return <Chip label={entry.translations[0]} />
          })}
        </div>
      </GameGrid>
    )
  }
}

export default SelectEnglish
