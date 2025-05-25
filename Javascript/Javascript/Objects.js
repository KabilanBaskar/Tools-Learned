// Objects
const myobj = {
    name : "myname",
    age : "myage",
}

// to print
console.log(myobj)
console.log(myobj.name)
console.log(myobj.age)

// inheritance
car = Object.create(myobj)
console.log(car)

// Key values
console.log(Object.keys(myobj))
console.log(Object.values(myobj))

// loop in obj
for(i in myobj) {
    console.log(typeof(i))
    console.log(myobj[i])
}

//delete
car.name = "mini-cooper"
car.color = "red"
console.log(car)
delete car.color;
console.log(car)

// checking undefined
console.log(car.hasOwnProperty("color"))

// Object destructuring
movie =
{
    title : "vadachennai",
    actor : "dhanush",
    director : "vetrimaran",
    rating : 5
}

// 1. Assigning a seperate variable to access values.
const {title : movieName, actor : actingInMovie, director : directingAMovie, rating : value} = movie
console.log(movieName, actingInMovie, directingAMovie, value)

// 2. Assigning key as a variable to access values.
const {title, actor, director, rating} = movie
console.log(title, actor, director, rating)

// 3. to print total obj using function
function print(director) {
    return director
}
console.log(print(movie))

// 4. to print particular value in object using function
function print({director}) {
    return director
}
console.log(print(movie))
