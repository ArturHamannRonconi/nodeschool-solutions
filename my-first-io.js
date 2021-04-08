const fs = require('fs')

const filePath = process.argv[2]

const contentFile = fs.readFileSync(filePath)
const string = contentFile.toString()

console.log(string.split('\n').length - 1)
