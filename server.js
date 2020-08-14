const axios = require('axios')
const cheerio = require('cheerio')
const colors = require('colors')

const podcastLink = process.argv[2]

const downloadPodcast = async () => {
  console.log(colors.green(`Starting downloading ${colors.bold(podcastLink)}${colors.green('...')}`))
  const html = await axios.get(podcastLink)
  const $ = cheerio.load(html.data)
  console.log('Successfully loaded HTML...')
}

if (!podcastLink || !podcastLink.includes('https://podcast.ausha.co/')) {
  console.log(colors.red(colors.bold('Invalid URL!')))
} else {
  downloadPodcast()
}
