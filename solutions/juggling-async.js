const http = require('http')

const urls = process.argv.slice(2)
const results = urls.map(() => null)

urls.forEach((url, index) => {
  http.get(url, res => {
    let result = ""
    res.setEncoding("utf8")
    res.on("data", data => result += data)
      
    res.on("end", () => {
      results[index] = result
         
      const verifyIfArrayHaveAllItems = results.every(result => result !== null)

      if(verifyIfArrayHaveAllItems)
        results.forEach(result => console.log(result))
    });
  });
})

