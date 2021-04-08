const readDirectory = require("./mymodule")

const dirName = process.argv[2]
const extension = process.argv[3]
const callback = (err, data) => {
  if (err)
    return console.error(err)
    
  data.forEach(file => console.log(file))
}

readDirectory(dirName, extension, callback)