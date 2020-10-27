import Fuse from 'fuse.js'
import React from 'react'
import useAPI from '../useAPI'
const findMatches = async (term, words) => {
  const fuse = new Fuse(words, {
    keys: ['language_entry', 'notes', 'tags', 'translations'],
    findAllMatches: true,
    threshold: 0.3,
    // keys: ['translations'],
  })
  const results = await fuse.search(term)
  return results
}
const useSearch = () => {
  const { words } = useAPI()
  const [results, setResults] = React.useState(null)
  const [isSearching, setIsSearching] = React.useState(false)
  const search = (term) => {
    console.log(words)
    setIsSearching(true)

    console.log(term)
    findMatches(term, words).then((results) => {
      setResults(results)
      setIsSearching(false)
    })
  }
  const reset = () => {
    setResults(null)
  }

  return {
    results,
    search,
    reset,
    isSearching,
  }
}

export default useSearch
