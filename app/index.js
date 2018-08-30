const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.end('Racionais 4:3\n')
})


server.listen(port, () => console.log(`server is Listen YOU honney`))
