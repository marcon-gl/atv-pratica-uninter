const botao = document.getElementById("btnMessage");
const message = document.getElementById("message")
botao.addEventListener("click", function(){
    message.style.display = "block";
    message.textContent = "Bem vindo, obrigado por acessar minha página!"
}
)