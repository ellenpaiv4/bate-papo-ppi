
const usuarios = [
    {user: "elen", pass: "123"},
    {user: "lara", pass: "123"},
    {user: "amanda", pass: "123"},
    {user: "mimmarcelo", pass: "Teste123"},
    {user: "teste", pass: "123"}
];

function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    let valido = usuarios.find(x => x.user == u && x.pass == p);

    if(valido){
        localStorage.setItem("logado", u);
        window.location.href = "chat.html";
    } else {
        alert("Login inválido");
    }
}

function verificarLogin(){
    if(!localStorage.getItem("logado")){
        window.location.href = "index.html";
    }
}

function enviar(){

    let msg = document.getElementById("msg").value;

    if(msg == ""){
        return;
    }

    let mensagens = JSON.parse(localStorage.getItem(chatAtual)) || [];

    mensagens.push(localStorage.getItem("logado") + ": " + msg);

    localStorage.setItem(chatAtual, JSON.stringify(mensagens));

    document.getElementById("msg").value = "";

    mostrar(chatAtual);
}

function mostrar(chat){
    let mensagens = JSON.parse(localStorage.getItem(chat)) || [];
    let div = document.getElementById("mensagens");

    div.innerHTML = "";

    mensagens.forEach(m => {
        div.innerHTML += `<div class="msg">${m}</div>`;
    });

    div.scrollTop = div.scrollHeight;
}

window.onload = function(){

    verificarLogin();

    mostrar(chatAtual);

}
function trocarChat(chat){
    chatAtual = chat;
    mostrar(chatAtual);
}