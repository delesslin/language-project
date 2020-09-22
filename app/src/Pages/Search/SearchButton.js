import { Button, styled } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const StyledButton = styled(Button)``
const SearchButton = ({ loading, onClick }) => {
  if (loading) {
    return (
      <StyledButton color='primary' variant='contained' disabled>
        <SearchIcon />
      </StyledButton>
    )
  } else {
    return (
      <StyledButton color='primary' variant='contained' onClick={onClick}>
        <SearchIcon />
      </StyledButton>
    )
  }
}

export default SearchButton
