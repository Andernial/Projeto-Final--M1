const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  const nomeJogador = document.getElementById("nome");
  if (nomeJogador.value === "") {
    document.getElementById("erro").style.display = "block";
  } else {
    location.href = "/quiz.html";
  }
});
function pergunta(){
    alert("Qual foi o primeiro console lançado pela empresa nintendo ?")
    verificaPergunta1()
   
}

function verificaPergunta1(){
    let resposta= prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: (A))" )
    
    if(resposta === "(A)"){
        alert("Você Acertou !")
        document.getElementById("botao-pergunta1").disabled = true;
        document.getElementById("certo1").style.display = "block";
    }else if(resposta === "(B)" || resposta === "(C)" || resposta === "(D)"){
        document.getElementById("botao-pergunta1").disabled = true;
        document.getElementById("errado1").style.display = "block";
        alert("Você Errou")
    }else{
        
        alert("Valor inválido")
    }
}



let pontuação