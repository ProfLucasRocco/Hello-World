let nomeusuario = prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuario");

while(nomeusuario == ""){

    nomeusuario = prompt("Qual o seu nome?");

}

if (nomeusuario == null){
    elemento.textContent = 'Seja muito bem vindo.';
}else{
    elemento.textContent = nomeusuario;
}