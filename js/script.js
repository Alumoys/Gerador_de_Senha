let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#passwourd");
let conteinerPassword = document.querySelector("conteiner-password");
 
let charset = "aqwsxzcdevfrbgtnhymjukiloçp0987654321";
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
    let pass = '';
    for( let i = 0,  n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math. floor(Math.random)* n);
    }
    console.log(pass)
    conteinerPassword.classList.remove("hide");
    Password.innerHTML = pass
    novaSenha = pass;
    function copyPassword(){
        alert("Senha copiada")
        navigator.clipboard.writeText(novaSenha);
    }
}
