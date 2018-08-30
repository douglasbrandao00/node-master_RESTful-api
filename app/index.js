const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true)
  
  const path = parseUrl
    .pathname
    .replace(/^\/+|\/+$/g, '')

  const queryParams = parseUrl.query
  console.log(queryParams)

  const method = req.method.toUpperCase()

  console.log(`Request on path ${path} on method ${method} on query ${JSON.stringify(queryParams)}`)

  res.end('Racionais 4:3\n')
})


server.listen(port, () => console.log(`server is Listen YOU honney`))
