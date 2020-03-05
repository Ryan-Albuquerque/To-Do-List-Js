var button = document.querySelector("button")

var form = document.querySelector("form")

button.addEventListener("click", function (event) {
    event.preventDefault()

    var dados = obtem_dados(form)

    if (dados.nome && dados.numero) {
        console.log(dados)

        var table = document.querySelector("table")

        var tr = tr(dados)

        if (dados.numero == "Alta") {
            tr.classList.add("urgente")
        }
        else if (dados.numero == "Baixa") {
            tr.classList.add("baixa")
        }

        table.appendChild(tr)

        form.reset()
    }

    else {
        alert("Digite as informações corretamente and try again bro! :s ")
    }

    function tr(dados) {
        var tr = document.createElement("tr")

        var tdNome = document.createElement("td")
        var tdNumero = document.createElement("td")

        tdNome.textContent = dados.nome
        tdNumero.textContent = dados.numero

        tr.appendChild(tdNome)
        tr.appendChild(tdNumero)

        return tr
    }

    function obtem_dados(form) {

        var dados = {
            nome: form.nome.value,
            numero: form.num.value
        }
        return dados
    }
})