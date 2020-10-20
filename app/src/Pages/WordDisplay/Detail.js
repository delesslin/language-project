import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import { Paper, Text } from '../../Components'
const DetailPaper = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin-top: 10px;
`
const TagPaper = styled(Paper)`
  padding: 20px 10px;
`
const Detail = ({ word }) => {
  return (
    <DetailPaper color='transparent'>
      <Text size={2}>
        <b>{word.language_entry}</b>
      </Text>
      <Text size={1.3}>
        <i>{word.pronunciation[0]}</i>
      </Text>
      <Text size={1.5}>{word.translations[0]}</Text>
      {word.notes.length === 0 ? null : (
        <div>
          <Text size={1.3}>Notes:</Text>
          <Text as='ol'>
            {word.notes.map((Note) => {
              return <Text as='li'>{Note}</Text>
            })}
          </Text>
        </div>
      )}
    </DetailPaper>
  )
}

export default Detail
