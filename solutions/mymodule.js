const fs = require('fs')

const myModule = {
  readDirectory: (dirName, extension, callback) => {
    const regex = new RegExp(`(.*)\.${extension}`, 'g')

    fs.readdir(dirName, 'utf-8', (err, data) => {
      if (err)
        return callback(err)

      const list = data.filter(file => regex.test(file))
      callback(null, list)
    })
  }
}

module.exports = myModule.readDirectory
