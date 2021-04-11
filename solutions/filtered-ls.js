const fs = require('fs')


const dirName = process.argv[2]
const encoding = 'utf-8'
const doItAfterReadDirectory = (error, files) => {
  if (error) throw error

  const extension = process.argv[3]
  const regex = new RegExp(`(.*)\.${extension}`, 'g')

  const filteredFiles = files.filter(file => regex.test(file))

  filteredFiles.forEach(file => console.log(`${file}`))
}
fs.readdir(dirName, encoding, doItAfterReadDirectory)
