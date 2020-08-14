const axios = require('axios')
const cheerio = require('cheerio')

const downloadFiles = async (podcastLink) => {
  console.log('Starting downloading files...')
  const html = await axios.get(podcastLink)
  const $ = cheerio.load(html.data)
  console.log('Successfully loaded HTML...')
}
downloadFiles()
