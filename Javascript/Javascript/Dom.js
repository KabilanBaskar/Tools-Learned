/* Checking the DOM is loaded */




/* Getting whole section */
const view1 = document.getElementById("view1")
console.log(view1)

const view2 = document.querySelector("#view2")
console.log(view2)

/* changing styles */
view1.style.display = "flex";
view2.style.display = "flex";

/* Getting whole section */
const view = document.getElementsByClassName("view")
console.log(view)

const sameview = document.querySelectorAll(".view")
console.log(sameview);

/* Getting all div elements */
const divs = view1.querySelectorAll("div")
console.log(divs);

const samedivs = view1.getElementsByTagName("div")
console.log(samedivs);

/* Getting even div elements */
const evndiv = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evndiv);

/* Changing styles in even div */
for(let i = 1; i < divs.length; i+=2) {
    divs[i].style.backgroundColor = "red"
    divs[i].style.borderRadius = "10%"
}

/* Changing styles in odd div */
for(let i = 0; i < divs.length; i+=2) {
    divs[i].style.backgroundColor = "orange"
    divs[i].style.borderRadius = "10%"
}

/* Changing background color for a section */
view1.style.backgroundColor = "brown"

/* Getting text value */
const navtitle = document.querySelector("nav h1")
console.log(navtitle);

/* Changing text value */
navtitle.textContent = "Page"

/* Adding HTML tags */
const navbar = document.querySelector("nav")
console.log(navbar);

navbar.innerHTML = "<h1> HI!!!! </h1> <p> Edited in js </p>"
console.log(navbar);

/* delete the element */
console.log(view2.lastElementChild.remove());


/* creating a new div */
// for(let i = 0; i < 10; i++) {
    newdiv = document.createElement("div")
    newdiv.innerHTML = "<h2> welcome </h2>"
    newdiv.style.width = "200px"
    newdiv.style.height = "100px"
    newdiv.style.backgroundColor = "yellow"
    newdiv.style.color = "black"
    newdiv.style.display = "grid"
    newdiv.style.alignItems = "center"
    newdiv.style.justifyContent = "center"
    newdiv.style.borderRadius = "10px"
    newdiv.style.borderColor = "black"
    newdiv.style.borderBlockStyle = "solid"
    newdiv.style.borderWidth = "20px"
    newdiv.style.margin = "10px"
    view2.append(newdiv)
// }