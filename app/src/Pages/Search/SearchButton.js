import { Button, SearchIcon } from 'Components'
import React from 'react'
import styled from 'styled-components'
const StyledButton = styled(Button)`
  margin: 20px 0px;
  width: auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  // border-radius: 5px 5px 50px 50px;
  border-radius: 50px;
  ${({ color }) =>
    color === 'disabled'
      ? `
  background-color: #bbb;
  box-shadow: none;
  &:hover {
    box-shadow: none;
    cursor: default;
  }
  `
      : ``}
`
const SearchButton = ({ loading, onClick }) => {
  if (loading) {
    return (
      <StyledButton color='disabled'>
        <SearchIcon size={50} />
      </StyledButton>
    )
  } else {
    return (
      <StyledButton color='secondary' onClick={onClick}>
        <SearchIcon />
      </StyledButton>
    )
  }
}

export default SearchButton
