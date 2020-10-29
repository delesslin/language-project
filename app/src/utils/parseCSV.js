/* eslint-disable */
import Papa from 'papaparse'

const parseCSV = (file) => {
  return new Promise((res, rej) => {
    var reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function (e) {
      Papa.parse(e.target.result, {
        header: true,
        complete: function (results) {
          res(results)
        },
      })
    }
  })
}

const split = (str) => {
  // takes a string and returns an array by splitting along "\", "/", or ";"
  if (str.length === 0) {
    return []
  }

  const reg = /[\\\/\;]/
  return str.split(reg)
}

export default async (file, words = []) => {
  return await parseCSV(file)
    .then((res) => {
      return res.data
    })
    .then((words) => {
      return words.map((word) => {
        return {
          ...word,
          pronunciation: split(word.pronunciation),
          alternative_spellings: split(word.alternative_spellings),
          translations: split(word.translations),
          tags: split(word.tags),
          images: word.images.split(';'),
          recordings: split(word.recordings),
          notes: split(word.notes),
        }
      })
    })
    .then((data) => {
      return data.map((entry) => {
        const i = words.findIndex(
          (word) => word.language_entry === entry.language_entry
        )
        if (i < 0) {
          return entry
        } else {
          return {
            ...entry,
            error: 'There is already an entry for this word',
          }
        }
      })
    })
}
