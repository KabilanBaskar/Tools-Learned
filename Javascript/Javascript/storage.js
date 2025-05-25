
function store() {
    myobj = {
        Name : "tiger",
        food : "deer",
        catogory : "animal"
    }
    window.localStorage.setItem("object",JSON.stringify(myobj))
    const val = JSON.parse(window.localStorage.getItem("object"))
    console.log(val);
    window.localStorage.clear()
    window.sessionStorage.clear()
}
store()

