
//VARIAVEIS
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeok = false
let emailok = false
let assok = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width= '100%'

// VALIDA NOME
function valNome(){
    let txtnome = document.querySelector('#txtnome')
    if (nome.value.length < 3) {
        txtnome.innerHTML = 'Nome inválido!'
        txtnome.style.color = 'red'
    }else{
        txtnome.innerHTML = 'Nome válido!'
        txtnome.style.color = 'green'
        nomeok = true
    }
}

// VALIDA EMAIL
function valEmail(){
    let txtemail = document.querySelector('#txtemail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtemail.innerHTML = "Email inválido!"
        txtemail.style.color = 'red'
    }else{
        txtemail.innerHTML = "Email válido!"
        txtemail.style.color = 'green'
        emailok = true
    }
}

// VALIDA ASSUNTO
function valAss(){
    let txtass = document.querySelector('#txtass')
    if (assunto.value.length >= 100) {
        txtass.innerHTML = 'Texto com muitos caracteries!'
        txtass.style.color = 'red'
        txtass.style.display = 'block'

    }else{
        txtass.style.display = 'none'
        assok = true
    }
}

function enviar(){
    if(nomeok == true && emailok == true && assok == true){

    alert("Formulário enviado com sucesso!")
    }else{
        alert("Formulário inválido, preencha novamente")
    }
}

function mapzoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}


function mapnormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

// var -> escopo global
// let -> variável que pode alterar
// const -> variável constante, pouco usada

/*
por Tag: getElementyByTagName()
por Id: getElementyById()
por Class: getElementsByClassName()
por Nome: getElementsByName()
por Seletor: querySelector()
*/  