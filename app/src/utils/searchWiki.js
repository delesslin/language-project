import Axios from 'axios'
// TODO: add back the previous, looser logic to preciser logic
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)
// TODO: Searching images provides VERY terrible results. Can we search wiki articles and find images in the article?

const searchWiki = async (searchTerm) => {
  const { data } = await Axios.get(`/api/image/search/${searchTerm}`)
  return data
}

export default searchWiki
