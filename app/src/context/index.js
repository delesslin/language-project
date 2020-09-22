import React from 'react'
import useGetWords from '../utils/hooks/useGetWords'

const WordsContext = React.createContext()

const WordsProvider = ({ children }) => {
  // bring in useGetWords
  const [words, tags, refetchWords] = useGetWords()
  const store = { words, tags, refetchWords }

  return <WordsContext.Provider value={store}>{children}</WordsContext.Provider>
}

export const Words = {
  Provider: WordsProvider,
  Context: WordsContext,
}
