const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true)
  
  const path = url
    .parse(req.url, true)
    .pathname
    .replace(/^\/+|\/+$/g, '')

  console.log(`Request recived on path ${path}`)

  res.end('Racionais 4:3\n')
})


server.listen(port, () => console.log(`server is Listen YOU honney`))
