const searchWiki = (searchTerm, num = 10) => {
  var url = 'https://en.wikipedia.org/w/api.php'

  var params = {
    action: 'query',
    format: 'json',
    list: 'allimages',
    aifrom: searchTerm,
    ailimit: num,
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
    .catch(function (error) {
      console.log(error)
      throw error
    })
}

export default searchWiki
