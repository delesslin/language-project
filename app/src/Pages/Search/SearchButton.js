import { Button, styled } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '../../Components/Layout/Nav/IconButton'

const StyledButton = styled(IconButton)``
const SearchButton = ({ loading, onClick }) => {
  if (loading) {
    return (
      <StyledButton color='primary' variant='secondary' disabled>
        <SearchIcon />
      </StyledButton>
    )
  } else {
    return (
      <StyledButton color='primary' variant='secondary' onClick={onClick}>
        <SearchIcon />
      </StyledButton>
    )
  }
}

export default SearchButton
