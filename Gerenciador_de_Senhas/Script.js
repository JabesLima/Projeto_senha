let valorElement = document.querySelector(".valor")
let medidorElement = document.getElementById("medidor")


valorElement.innerHTML = medidorElement.value 

medidor.oninput = function(){
    valorElement.innerHTML = this.value
}

let nova_senha = '';

function Gerar() {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%¨&*"
    let respElement = document.querySelector(".resp")
    let senhaElement = document.querySelector(".senha")
    let pass =""
    senhaElement.innerHTML = ''
    respElement.innerHTML = ''
    respElement.innerHTML = 'Sua senha foi gerada:'
    for (let i = 0, n = charset.length; i < medidorElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
        senhaElement.innerHTML += pass 
    }
    senhaElement.innerHTML = pass
    nova_senha = pass
}

function copy() {
    window.alert("senha copiada com sucesso!")
    navigator.clipboard.writeText(nova_senha)
}