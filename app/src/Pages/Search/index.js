import media from 'css-in-js-media'
import React, { useEffect, useRef, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import { Page } from '../../Components'
import useSearch from '../../utils/hooks/useSearch'
import Results from './Results'
import SearchButton from './SearchButton'
import SearchField from './SearchField'

// TODO: Error check that something is actually input
// TODO: redirect to /search/?SEARCHTERM
export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

  ${media('<desktop')} {
    justify-content: flex-start;
    ${media('<phone')} {
      justify-content: center;
    }
  }
`
const Search = () => {
  const { results, search, reset, isSearching, isLoading } = useSearch()
  const history = useHistory()
  const [error, setError] = useState(false)
  const inputRef = useRef(null)
  const { _term = '' } = useParams()
  console.log(_term)
  useEffect(() => {
    if (_term == null || _term.length === 0) {
      reset()
    } else {
      search(_term)
    }
    // eslint-disable-next-line
  }, [_term, isLoading])
  const handleClick = () => {
    if (inputRef.current.value != null && inputRef.current.value.length > 0) {
      history.push(`/search/${inputRef.current.value}`)
    } else {
      setError(true)
    }
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
    <Page Icon={RiSearch2Line}>
      <SearchBox>
        <SearchField
          loading={isSearching}
          onChange={handleChange}
          ref={inputRef}
          error={error}
          defaultValue={_term}
        />
        <SearchButton loading={isSearching} onClick={handleClick} />
      </SearchBox>
      <Results loading={isSearching} results={results} />
    </Page>
  )
}

export default Search
