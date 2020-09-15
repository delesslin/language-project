import React from 'react'
import getWords from './getWords'

const useGetWords = () => {
  const [words, setWords] = React.useState([])
  const [tags, setTags] = React.useState([])

  const refetchWords = () => {
    console.log('fetching words again')
    getWords().then((data) => {
      setWords(data)
    })
  }
  // useEffect get data and set state
  React.useEffect(() => {
    console.log('fetching...')
    getWords().then((data) => {
      setWords(data)
    })
  }, [])

  // React.useEffect .reduce words into tags
  React.useEffect(() => {
    if (words.length > 0) {
      const newTagsArr = words.reduce((acc, curr) => {
        curr.tags.forEach((el) => {
          if (!acc.includes(el)) {
            acc.push(el)
          }
        })
        return acc
      }, [])

      setTags(newTagsArr)
    }
  }, [words])

  React.useEffect(() => {
    console.log('tags', tags)
  }, [tags])

  return [words, tags, refetchWords]
}

export default useGetWords
