import { Key } from './Key'
import LAYOUT from './layout.json'
import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
const KeyboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  ${media('>tablet')} {
    grid-gap 7px;
    ${media('>desktop')}{
      padding: 0px 20%;
    }
  }
`

const Row = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  &:nth-child(1) {
  }
  &:nth-child(2) {
    ${media('>tablet')} {
      padding: 0px 5%;
    }
  }
  grid-gap: 5px;
  min-height: 25px;
  ${media('>tablet')} {
    min-height: 75px;
    grid-gap: 7px;
  }
`

export const KeyboardComponent = ({
  setText = (string) => console.log(string),
}) => {
  const [isShifted, setIsShifted] = useState(false)

  return (
    <KeyboardGrid>
      {LAYOUT.map((row) => {
        const keys = row.map((entry, i) => {
          return (
            <Key
              key={i}
              data={entry}
              setIsShifted={setIsShifted}
              isShifted={isShifted}
              setString={setText}
            />
          )
        })
        return <Row>{keys}</Row>
      })}
    </KeyboardGrid>
  )
}
