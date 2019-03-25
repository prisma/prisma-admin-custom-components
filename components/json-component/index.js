const qs = require('qs')
const url = require('url')

module.exports = (req, res) => {
  const parsed = qs.parse(url.parse(req.url).search, {
    ignoreQueryPrefix: true,
  })
  if (parsed.data) {
    res.end(JSON.stringify(JSON.parse(parsed.data), null, 2))
  } else {
    res.end('Please provide data in query string!')
  }
}
