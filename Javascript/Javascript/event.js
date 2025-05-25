/* Event Listeners */

/* Syntax :

.addEventListener(Event, function, useCapture) */
 
h2 = newdiv.querySelector("h2")
console.log(h2)

const ChangeBorderWidth = () => {
    newdiv.style.borderWidth = "0px"
}
h2.addEventListener("click", ChangeBorderWidth, false)

h2.removeEventListener("click", ChangeBorderWidth, true)

h2.addEventListener("click", function(event){
    event.target.textContent = "Hi"
}, true)