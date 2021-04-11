const fs = require('fs')

const filePath = process.argv[2]

const fileContent = fs.readFileSync(filePath)
const string = fileContent.toString()

console.log(string.split('\n').length - 1)
