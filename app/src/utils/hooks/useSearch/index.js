import React from 'react'
import { Words } from '../../../context'
import Fuse from 'fuse.js'
const findMatches = async (term, words) => {
  const fuse = new Fuse(words, {
    // keys: ['language_entry', 'notes', 'tags', 'translations'],
    keys: ['translations'],
  })
  const results = await fuse.search(term)
  return results
}
const useSearch = () => {
  // refactor using CONTEXT
  const { words } = React.useContext(Words.Context)
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

    // setTimeout(() => {
    //   setResults([])
    //   setIsSearching(false)
    // }, 3000)
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
