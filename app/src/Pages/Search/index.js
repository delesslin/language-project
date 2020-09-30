import { Grid } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import useSearch from '../../utils/hooks/useSearch'
import Results from './Results'
import SearchButton from './SearchButton'
import SearchField from './SearchField'
// TODO: Error check that something is actually input
// TODO: redirect to /search/?SEARCHTERM
const Search = () => {
  const { results, search, reset, isSearching } = useSearch()
  const [error, setError] = useState(false)
  const inputRef = useRef(null)
  // useEffect(() => {
  //   console.log('results', results)
  // }, [results])
  const handleClick = () => {
    if (inputRef.current.value.length > 0) {
      search(inputRef.current.value)
    } else {
      setError(true)
    }
    // console.log('results', results)
  }
  const handleChange = () => {
    if (results !== null) {
      reset()
    }
    if (error) {
      setError(false)
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
              error={error}
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
