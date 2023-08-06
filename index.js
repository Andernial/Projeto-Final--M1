let pontosJogador = 0

const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  const nomeJogador = document.getElementById("nome");
  if (nomeJogador.value === "") {
    document.getElementById("erro").style.display = "block";
  } else {
    location.href = "#container2";
  }
});
function pergunta(){
    alert("Qual foi o primeiro console lançado pela empresa nintendo ?")
    verificaPergunta1()
   
}

function verificaPergunta1(){
    let resposta= prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: A)")

    resposta = resposta.toUpperCase();
    
    if(resposta === "A"){
        alert("Você Acertou !")
        document.getElementById("botao-pergunta1").disabled = true;
        document.getElementById("certo1").style.display = "block";
        pontosJogador = pontosJogador+1
    }else if(resposta === "B" || resposta === "C" || resposta === "D"){
        document.getElementById("botao-pergunta1").disabled = true;
        document.getElementById("errado1").style.display = "block";
        alert("Você Errou")
    }else{
        
        alert("Valor inválido")
    }
}


window.onload(window.scrollTo(0, 0))

let pontuação