import Axios from 'axios'
// TODO: add back the previous, looser logic to preciser logic
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
// TODO: Searching images provides VERY terrible results. Can we search wiki articles and find images in the article?

const getWikiImages = async (term) => {
  try {
    const response = await Axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${term}&prop=images&format=json&pithumbsize=100&origin=*`
    )

    const { pages } = response.data.query

    const keys = Object.keys(pages)

    const fileNames = keys.reduce((acc, key) => {
      const titles = pages[key].images.map((obj) => obj.title)
      return [...acc, ...titles]
    }, [])
    // just fetch and return here
    const resPages = await Promise.all(
      fileNames.map((name) => {
        return Axios(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${name}&format=json&prop=imageinfo&iiprop=url&origin=*`
        ).then((res) => {
          return res.data.query
        })
        const { pages } = response.data.query
        console.log('pages', pages)
        const keys = Object.keys(pages)
        const newUrls = keys.reduce((acc, key) => {
          const obj = pages[key]
          console.log(obj)
          const urls = obj.imageinfo.map((imgObj) => imgObj.url)
          console.log('urls: ', urls)
          if (typeof urls === 'Array') {
            return [...acc, ...urls]
          } else {
            return acc
          }
        }, [])
        console.log('newUrls', newUrls)
      }, [])
    )
    const images = resPages.reduce((acc, curr) => {
      const keys = Object.keys(curr)
      console.log('keys', keys)
      const urls = keys.reduce((arr, key) => {
        const obj = curr[key]
        console.log('obj', obj)
        const keys = Object.keys(obj)

        const strings = obj[keys[0]].imageinfo.map((imgObj) => imgObj.url)
        console.log(strings)
        return [...arr, ...strings]
        // if (obj.imageInfo != null) {
        // }
        // return arr
      }, [])
      return [...acc, ...urls]
    }, [])
    console.log(images)
    return images
  } catch (err) {
    console.error(err)
  }
}
const searchWiki = async (searchTerm) => {
  const images = await getWikiImages(searchTerm)
  return images
}

export default searchWiki
