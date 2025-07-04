function inserirNome (){
    let nomeUsuario = prompt("qual seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent=nomeUsuario;
}

inserirNome();