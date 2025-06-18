// window.setTimeout(mensagem, 2000)

function Mensagem(){
    alert("Aprendendo DOM com JS")
    alert(Date())
}

let tagH1 = document.createElement("h1")
tagH1.innerHTML = "Olá mundo!"
document.body.appendChild(tagH1)