import { Grid } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import useSearch from '../../utils/hooks/useSearch'
import Results from './Results'
import SearchButton from './SearchButton'
import SearchField from './SearchField'

const Search = () => {
  const { results, search, reset, isSearching } = useSearch()
  const inputRef = useRef(null)
  useEffect(() => {
    console.log('results', results)
  }, [results])
  const handleClick = () => {
    search(inputRef.current.value)
    // console.log('results', results)
  }
  const handleChange = () => {
    if (results !== null) {
      reset()
    }
  }
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <SearchField
              loading={isSearching}
              onChange={handleChange}
              ref={inputRef}
            />
          </Grid>
          <Grid item>
            <SearchButton loading={isSearching} onClick={handleClick} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Results loading={isSearching} results={results} />
      </Grid>
    </Grid>
  )
}

export default Search
