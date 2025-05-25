//Numbers
const myNumber = 20

// string to Number
console.log(typeof(Number("32")))

// check a number
console.log(Number.isInteger(myNumber))

// to float
console.log(Number.parseFloat("42.3sss"))

// rounding float
console.log(Number.parseFloat("42.05").toFixed(1))

// to String
console.log(Number.toString(myNumber))

//isNaN
/* 1. Number.isNaN => Returns true only for NaN like 0/0
   2. isNaN => Returns true only string like "wow"
*/ 
console.log(Number.isNaN("42"))
console.log(Number.isNaN(Number(myNumber)))
console.log(Number.isNaN("wow"))
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(0/0))

console.log(isNaN("42"))
console.log(isNaN(Number(myNumber)))
console.log(isNaN("wow"))  