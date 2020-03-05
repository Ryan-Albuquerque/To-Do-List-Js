var table = document.querySelector("table")

console.log(table)

var exception = document.querySelector(".header")

table.addEventListener("dblclick", function (event) {
    event.preventDefault()
    // console.log(event.target) //mostra quem foi clicado

    // console.log(event.target.parentNode.textContent)
    // console.log(exception.textContent)

    if (event.target.parentNode == exception) {
        console.log("Cabeçalho não será removido baby")
    }
    else {
        event.target.parentNode.remove()
    }
})


