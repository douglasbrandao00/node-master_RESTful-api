const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

const port = 3000

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true)
  
  const path = parseUrl
    .pathname
    .replace(/^\/+|\/+$/g, '')

  const queryParams = parseUrl.query

  const method = req.method.toUpperCase()

  const header = req.headers

  const decoder = new StringDecoder('utf-8')
  let buffer = ''

  req.on('data', (data) => {
    buffer += decoder.write(data)
  })

  req.on('end', () => {
    buffer += decoder.end()
    
    console.log(`that: ${buffer}`)
    res.end('Racionais 4:3\n')

  })


})


server.listen(port, () => console.log(`server is Listen YOU honney`))
