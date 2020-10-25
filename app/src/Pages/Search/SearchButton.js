import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const SearchButton = ({ loading, onClick }) => {
  if (loading) {
    return (
      <Button color='primary' variant='secondary' disabled>
        <SearchIcon />
      </Button>
    )
  } else {
    return (
      <Button color='primary' variant='secondary' onClick={onClick}>
        <SearchIcon />
      </Button>
    )
  }
}

export default SearchButton
