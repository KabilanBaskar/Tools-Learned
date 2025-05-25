/* Class */

// object
const myPizza = 
{
    size : "medium",
    type : "chicken",
    bake : function() {
        return console.log(`your ${this.size} size ${this.type} Pizza is ready`)
    }
}

// super class
class Pizza {
    constructor(size, type) {
        this.size = size
        this.type = type
        this.toping = "mushroom"
    }
    getTopings() {
        return this.toping
    }
    setTopings(toping) {
        this.toping = toping
    }
    bake() {
        return console.log(`your ${this.size} size ${this.type} Pizza with ${this.toping} toping is ready`)
    }
}
order1 = new Pizza("medium", "chicken")
order1.bake()
order2 = new Pizza("small", "cheese")
order2.setTopings("chillli")
order2.bake()

// child class
class custom extends Pizza {
    constructor(size, type, slice) {
        super(size, type)
        this.slice = slice
        this.taste = "spicy"
    }
    getTaste() {
        return this.taste
    }
    setTaste(taste) {
        this.taste = taste 
    } 
    serve() {
        console.log(`A ${this.slice} sliced ${this.taste} ${this.size} sized ${this.type} Pizza with ${this.toping} toping is ready`)
    }
}

order = new custom("large", "garlic", 8)
order.serve()

// Private and Public property
class vehicle {
    catogory = "car"
    #engine = "2 stroke"
    constructor(color, type) {
        this.color = color
        this.type = type
    }
    buy() {
        return console.log(`A ${this.#engine} ${this.type} ${this.catogory} with ${this.color} is sold.`)
    }
}
motor = new vehicle("black green", "manual")
motor.buy()