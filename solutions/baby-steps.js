const formatNumbers = process.argv.map(args => Number(args))
const numbers = formatNumbers.filter(args => !isNaN(args))
const sumNumbers = numbers.reduce((n1, n2) => n1 + n2)

console.log(sumNumbers);