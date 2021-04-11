const fs = require('fs')

const filePath = process.argv[2]
const doItAfterReadFile = (error, fileContent) => {
  if (error) throw error

  const string = fileContent.toString()
  const numberNewLines = string.split('\n').length - 1
  console.log(numberNewLines)
}

fs.readFile(filePath, doItAfterReadFile)