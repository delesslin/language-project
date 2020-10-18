import { arrayShuffle } from '@adriantombu/array-shuffle'
import pluralize from 'pluralize'
const genTags = async (words = []) => {
  const newTagsArr = words.reduce((acc, curr) => {
    curr.tags.forEach((el) => {
      // sanitize tags of ' ' at beginning or end
      if (!acc.includes(el.trim())) {
        acc.push(el.trim())
      }
    })
    return acc
  }, [])
  // Turn array into array of objects containing an array of word _ids
  const objArray = newTagsArr.reduce((acc, curr) => {
    const taggedWords = words.filter((word) => word.tags.includes(curr.trim()))
    return [
      ...acc,
      {
        tag: curr,
        words: taggedWords,
      },
    ]
  }, [])
  // console.log(objArray)
  // reverse alphabetize tags
  const reverseAlphabet = objArray.sort((a, b) => {
    if (a.tag < b.tag) {
      return 1
    }
    if (a.tag > b.tag) {
      return -1
    }
    return 0
  })
  // console.log('alphabetized', reverseAlphabet)
  // consolidate
  const consolidated = reverseAlphabet.reduce((acc, curr) => {
    // does acc contain a pluralized form of the curr?
    // console.log(pluralize.plural(curr.tag))
    const i = acc.findIndex((el) => el.tag === pluralize.plural(curr.tag))

    // if it does, add curr's words to acc[i].words & return acc
    if (i > -1) {
      acc[i].words = [...acc[i].words, ...curr.words]
      return acc
    } else {
      // else return [...acc, curr]
      return [...acc, curr]
    }
  }, [])
  // console.log(consolidated)
  // add img to each object
  const imagedTags = consolidated.map((entry) => {
    // check if entry.words includes an images.length > 0
    let image = ''
    entry.words.forEach((word) => {
      if (word.images.length > 0) {
        // find one that includes an image
        image = word.images[0]
      }
    })
    // if it does,
    return {
      image,
      ...entry,
    }
  })
  console.log(imagedTags)
  const shuffled = await arrayShuffle(imagedTags)
  return shuffled
}

export default genTags
