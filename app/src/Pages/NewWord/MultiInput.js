import React, { useState } from 'react'

import useMultiInput from '../../utils/hooks/useMultiInput'
import MultiInputContainer from '../../Components/MultiInputContainer'
// const StyledTagsGrid = styled(Grid)({
//   minHeight: '50px',
// })

export const MultiInput = ({ ATOM, label }) => {
  const { state, add, remove } = useMultiInput(ATOM)
  const [inputValue, setInputValue] = useState('')
  const handleAdd = () => {
    add(inputValue)
    setInputValue('')
  }

  const handleDelete = (pron) => {
    remove(pron)
  }
  return (
    <MultiInputContainer
      inputValue={inputValue}
      handleChange={(e) => setInputValue(e.currentTarget.value)}
      state={state}
      buttonClick={handleAdd}
      label={label}
      handleDelete={handleDelete}
    />
  )
}
