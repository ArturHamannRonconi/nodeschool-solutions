const http = require('http')

const port = process.argv[2]

const getTimeFormated = time => time.toString().length < 2 ? `0${time}` : time 

const server = http.createServer((request, response) => {

  const headers = {
    'Access-Controll-Allow-Origin': '*',
    'Access-Controll-Allow-Methods': 'get',
    'Content-Type': 'application/json'
  }
  response.writeHead(200, headers)

  const url = new URL(`http://localhost:${port}${request.url}`)

  const urlSearchParams = url.searchParams
  const isoFormat = urlSearchParams.get('iso')
  const date = new Date(isoFormat)

  const hour = getTimeFormated(date.getHours())
  const minute = getTimeFormated(date.getMinutes())
  const second = getTimeFormated(date.getSeconds())
  const unixtime = date.getTime()


  const paths = {
    '/api/parsetime': { hour, minute, second },
    '/api/unixtime': { unixtime },
  }

  const path = url.pathname
  const json = JSON.stringify(paths[path])
  
  response.end(json)
  
})

server.listen(port, () => console.log('Server is Runing...'))