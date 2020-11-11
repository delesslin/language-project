import React from 'react'
import styled from 'styled-components'
import { Text } from 'Components'
const FiltersDiv = styled.div`
  grid-area: filters;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
const Filter = styled.div`
  background-color: ${({ current, theme }) =>
    current ? theme.secondary : theme.white};
  padding: 10px;
  margin: 5px 2px;
  border-radius: 10px 100px / 120px;
`
const Filters = ({ filters, selectFilter }) => {
  const { hiddenFirst, noImagesFirst, noRecordingsFirst, noTagsFirst } = filters
  const handleClick = (obj) => selectFilter(obj)
  return (
    <FiltersDiv>
      <Filter
        current={hiddenFirst}
        onClick={() => handleClick({ hiddenFirst: true })}
      >
        <Text size={1}>Hidden Words First</Text>
      </Filter>
      <Filter
        current={noImagesFirst}
        onClick={() => handleClick({ noImagesFirst: true })}
      >
        <Text size={1}>Words without Images First</Text>
      </Filter>
      <Filter
        current={noRecordingsFirst}
        onClick={() => handleClick({ noRecordingsFirst: true })}
      >
        <Text size={1}>Words without Recordings First</Text>
      </Filter>
      <Filter
        current={noTagsFirst}
        onClick={() => handleClick({ noTagsFirst: true })}
      >
        <Text size={1}>Words without Tags First</Text>
      </Filter>
    </FiltersDiv>
  )
}

export default Filters
