//Json data

const obj = {
    degree : "B.Tech",
    branch : "IT",
    remsem : [7,8],
    type : "student",
    check : function() {
        return console.log(`a ${this.type} pursuing ${this.degree} ${this.branch} in ${this.remsem[0]}th semester.`)
    }
}
obj.check()

// 1. Object to JSON
const sendJSON = JSON.stringify(obj)
console.log(sendJSON)

// 2. JSON to Object
const recieveJSON = JSON.parse(sendJSON)
console.log(recieveJSON)