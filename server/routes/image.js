const express = require('express')
const Axios = require('axios').default
const router = express()
const getWikiImages = async (term) => {
  try {
    const response = await Axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${term}&prop=images&format=json&pithumbsize=100&origin=*`
    )

    const { pages } = response.data.query

    const keys = Object.keys(pages)

    const fileNames = keys.reduce((acc, key) => {
      if (Array.isArray(pages[key].images)) {
        const titles = pages[key].images.map((obj) => obj.title)
        return [...acc, ...titles]
      } else {
        return [...acc]
      }
    }, [])
    // just fetch and return here
    const resPages = await Promise.all(
      fileNames.map((name) => {
        return Axios(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${name.replace(
            /\s/g,
            '_'
          )}&format=json&prop=imageinfo&iiprop=url&origin=*`
        )
          .then((res) => {
            return res.data.query
          })
          .catch((e) => {
            console.error(e)
            return {}
          })
      })
    )
    const images = resPages.reduce((acc, curr) => {
      const keys = Object.keys(curr)
      console.log('keys', keys)
      const urls = keys.reduce((arr, key) => {
        const obj = curr[key]
        console.log('obj', obj)
        const keys = Object.keys(obj)
        if (Array.isArray(obj[keys[0]].imageinfo)) {
          const strings = obj[keys[0]].imageinfo.map((imgObj) => imgObj.url)
          console.log(strings)
          return [...arr, ...strings]
        } else {
          return arr
        }
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
router.get('/search/:term', async (req, res) => {
  try {
    const { term } = req.params
    const responses = await getWikiImages(term)
    res.send([...responses])
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
