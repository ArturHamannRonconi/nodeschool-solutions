const net = require('net')

const port = process.argv[2]


const formatTime = time => time.toString().length < 2 ? `0${time}` : time
const getFullDate = () => {
  const date = new Date()
  
  const year = date.getFullYear()
  const month = formatTime(date.getMonth() + 1)
  const day = formatTime(date.getDate())

  const hours = formatTime(date.getHours())
  const minutes = formatTime(date.getMinutes())
  
  const formatedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`
  return formatedDate
}


const server = net.createServer(socket => socket.end(getFullDate()))

server.listen(port, () => console.log("Server is Runing..."))