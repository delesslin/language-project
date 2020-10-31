import React from 'react'
import useAPI from '../../../utils/hooks/useAPI'

const noRecordingsFirst = (arr) => {
  return arr.sort((a, b) => {
    return a.recordings.length > b.recordings.length
  })
}
const noImagesFirst = (arr) => {
  return arr.sort((a, b) => {
    return a.images.length > b.images.length
  })
}
const hiddenFirst = (arr) => {
  return arr.sort((a, b) => a.public)
}
const defaultSort = (arr) => {
  return arr.sort((a, b) => {
    if (a.language_entry < b.language_entry) {
      return -1
    }
    if (a.language_entry > b.language_entry) {
      return 1
    }
    return 0
  })
}
const noTagsFirst = (arr) => {
  return arr.sort((a, b) => {
    return a.tags.length > b.tags.length
  })
}
const useFilters = () => {
  const { words } = useAPI()
  const [orderedWords, setOrderedWords] = React.useState([])
  const [filters, setFilters] = React.useState({
    noRecordingsFirst: false,
    noImagesFirst: false,
    hiddenFirst: false,
    noTagsFirst: false,
  })
  React.useEffect(() => {
    let filtered = defaultSort(words)

    if (filters.noRecordingsFirst) {
      filtered = noRecordingsFirst(filtered)
    }
    if (filters.noImagesFirst) {
      filtered = noImagesFirst(filtered)
    }
    if (filters.hiddenFirst) {
      filtered = hiddenFirst(filtered)
    }
    if (filters.noTagsFirst) {
      filtered = noTagsFirst(filtered)
    }
    setOrderedWords(filtered)
  }, [words, filters])
  const selectFilter = (newFilterObj) => {
    let obj = { ...filters }
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      obj[key] = false
    })
    setFilters(() => {
      const newFilters = {
        ...obj,
        ...newFilterObj,
      }
      console.log(newFilters)
      return newFilters
    })
  }
  return {
    filters,
    selectFilter,
    orderedWords,
  }
}

export default useFilters
