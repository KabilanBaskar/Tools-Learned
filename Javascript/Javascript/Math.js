//Math
myNumber = 20

/* Properties */

// Predefined pi value
console.log(Math.PI)






/* Function */

// ignore decimal
console.log(Math.trunc(Math.PI))

// rounding values
console.log(Math.round(Math.PI))

// floor and ceil
console.log(Math.ceil(3.2))
console.log(Math.floor(2.8))

// power
console.log(Math.pow(2,3))

// min & max
console.log(Math.min(3,2,1))
console.log(Math.max(3,2,1,4))

// random value
console.log(Math.random())




/* sample example */

/* to generate a random character in a name */

myName = "kabilan.B"
length = myName.length
randNum = Math.random()*length
console.log(myName.charAt(randNum))
