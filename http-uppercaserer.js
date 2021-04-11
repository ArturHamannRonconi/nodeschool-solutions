const http = require('http')
const { Transform } = require('stream')

const port = process.argv[2]
const transformator = new Transform({ decodeStrings: false })

const server = http.createServer((request, response) => {
  response.setHeader('access-controll-allow-origin', '*')
  response.setHeader('access-controll-allow-methods', 'post')
  
  request.pipe(transformator)
  
  transformator._transform = (chunk, encoding, done) => {
    const string = chunk.toString()
    const upperCaseString = string.toUpperCase()

    done(null, upperCaseString)
  }
  
  transformator.pipe(response)
})

server.listen(port, () => console.log('Server is Runing...'))