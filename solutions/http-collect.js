const http = require('http')
const url = process.argv[2]

http.get(url, res => {
  let string = ""

  res.setEncoding('utf-8')
  res.on('data', data =>  string += data)

  res.on('end', () => {
    console.log(string.length)
    console.log(string)
  })
})
