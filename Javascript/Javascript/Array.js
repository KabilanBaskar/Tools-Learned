// Array
arr = ["hi","hello", 920, 182.098, "deleted", "delete"]

// Push and Pop
arr.push("last")
console.log(arr)

arr.pop()
console.log(arr)

// Unshift and Shift
arr.unshift("first")
console.log(arr)

arr.shift()
console.log(arr)

// splice
arr.splice(1,1)
console.log(arr)

arr.splice(1,1,"second")
console.log(arr)

arr.splice(1,0, "changed")
console.log(arr)

// Slice
newarr = arr.slice(2,5)
console.log(newarr)

// Join
arr1 = arr.join()
console.log(arr1)

// Split
arr2 = arr1.split(",")
console.log(arr2)

// concat
numarr1 = [1,2,3,4,5]
numarr2 = [6,7,8,9,10]
numarr = numarr1.concat(numarr2)
console.log(numarr)

// Spread Operator
numArr = [...numarr1, ...numarr2, ...numarr]
console.log(numArr)