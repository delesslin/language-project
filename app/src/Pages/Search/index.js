import { Grid } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import Page from '../../Components/Page'
import { SearchBox } from '../../styled/Content'
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
    <Page title='search'>
      <SearchBox>
        <SearchField
          loading={isSearching}
          onChange={handleChange}
          ref={inputRef}
          error={error}
        />
        <SearchButton loading={isSearching} onClick={handleClick} />
      </SearchBox>
      <Results loading={isSearching} results={results} />
    </Page>
  )
}

export default Search
