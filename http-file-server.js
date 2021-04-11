const fs = require('fs')
const http = require('http')

const port = process.argv[2]
const file = process.argv[3]

const readStream = fs.createReadStream(file)

const server = http.createServer((req, res) => {
  const writable = readStream.pipe(res)
  writable.on('close', data => console.log(data))
})

server.listen(port, () => console.log('Server is Runing...'))