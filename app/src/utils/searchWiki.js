const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
// TODO: Searching images provides VERY terrible results. Can we search wiki articles and find images in the article?
const searchWiki = (searchTerm, num = 10) => {
  var url = 'https://en.wikipedia.org/w/api.php'

  var params = {
    action: 'query',
    format: 'json',
    list: 'allimages',
    aifrom: searchTerm,
    ailimit: 50,
  }

  url = url + '?origin=*'
  Object.keys(params).forEach(function (key) {
    url += '&' + key + '=' + params[key]
  })

  return fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      return response.query.allimages
      // console.log(images)
    })
    .then((images) => {
      return images.map((img) => img.url)
    })
    .then((images) => shuffleArray(images))
    .then((images) => images.slice(-num))
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

export default searchWiki
