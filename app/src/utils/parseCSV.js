import Papa from 'papaparse'

const parseCSV = (file) => {
  return new Promise((res, rej) => {
    var reader = new FileReader()
    reader.readAsText(file)
    reader.onload = function (e) {
      // console.log(e.target.result)
      Papa.parse(e.target.result, {
        header: true,
        complete: function (results) {
          res(results)
        },
      })
    }
  })
}

export default parseCSV
