let pontosJogador = 0
let perguntas = 0;
const nomeJogador = document.getElementById("nome");

const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  if (nomeJogador.value === "") {
    document.getElementById("erroNome").style.display = "block";
    document.getElementById("nome").style.border = "2px solid red";
    document.getElementById("titulo-menu").style.marginBottom = "50px";
  } else {
    location.href = "#container2";
    document.getElementById("progresso").style.display = "block";
  }
});

// Perguntas ex: primeiraPergunta; segundaPergunta...
const botaoPergunta1 = document.getElementById("botao-pergunta1")
botaoPergunta1.addEventListener("click", function primeiraPergunta() {
  if (perguntas == 0) {
    alert("Qual foi o primeiro console lançado pela empresa nintendo ?")
    resposta = prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: A)")
    perguntas = 1;
  }
  verficiarAlternativa()

})

const botaoPergunta2 = document.getElementById("botao-pergunta2")
botaoPergunta2.addEventListener("click", function segundaPergunta() {
  if (perguntas == 1) {
    alert("Qual desses jogos a personagem Jett pertence ?")
    resposta = prompt("(A) Fall Guys (B) Valorant (C) Counter Strike (D) League of Legend      (Exemplo: A)")
    perguntas = 2;
  }
  verficiarAlternativa()

})

const botaoPergunta3 = document.getElementById("botao-pergunta3")
botaoPergunta3.addEventListener("click", function terceiraPergunta() {
  if (perguntas == 2) {
    alert("Dentre esses jogos, qual foi produzido no Brasil?")
    resposta = prompt("(A) Limbo (B) Katana ZERO (C) Subway Surfers (D) Horizon Chase Turbo      (Exemplo: A)")
    perguntas = 3;
  }
  verficiarAlternativa()

})

const botaoPergunta4 = document.getElementById("botao-pergunta4")
botaoPergunta4.addEventListener("click", function quartaPergunta() {
  if (perguntas == 3) {
    alert("Qual é o nome da primeira boss do jogo Hollow Knight?")
    resposta = prompt("(A) Hollow Knight (B) Hornet (C) False Knight (D) Watcher Knights      (Exemplo: A)")
    perguntas = 4;
  }
  verficiarAlternativa()

})
const botaoPergunta5 = document.getElementById("botao-pergunta5")
botaoPergunta5.addEventListener("click", function quintaPergunta() {
  if (perguntas == 4) {
    alert("Em qual linguagem de programação foi feito o jogo Minecraft ?")
    resposta = prompt("(A) C++ (B) Html (C) Java (D) Java-Script    (Exemplo: A)")
    perguntas = 5;
  }
  verficiarAlternativa()

})

// Pergunta 6
const botaoPergunta6 = document.getElementById("botao-pergunta6")
botaoPergunta6.addEventListener("click", function sextaPergunta() {
  if (perguntas == 5) {
    alert("Qual desses Campeões do jogo league of legends  é a melhor opção para jogar na Top Line?")
    resposta = prompt("(A) Miss Fortune (B)  Ahri (C) Ornn (D) Soraka       (Exemplo: A)")
    perguntas = 6;
  }
  verficiarAlternativa()

})

// Pergunta 7
const botaoPergunta7 = document.getElementById("botao-pergunta7")
botaoPergunta7.addEventListener("click", function setimaPergunta() {
  if (perguntas == 6) {
    alert("No jogo Candy Crush Saga quantos doces formam uma Colour Bomb?")
    resposta = prompt("(A)  7 (B)  6 (C) 4 (D) 5      (Exemplo: A)")
    perguntas = 7;
  }
  verficiarAlternativa()

})

// function para saber o fluxo das respostas
function verficiarAlternativa() {

  // Pergunta 1
  if (perguntas == 1) {
    if (resposta === "A" || resposta === "a") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("lista1").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "B" || resposta === "b" || resposta === "C" || resposta === "C" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("lista1").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: A)")
      verficiarAlternativa()
    }
    // Pergunta 2
  } else if (perguntas == 2) {

    if (resposta === "B" || resposta === "b") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta2").disabled = true;
      document.getElementById("lista2").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "C" || resposta === "C" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta2").disabled = true;
      document.getElementById("lista2").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) Fall Guys (B) Valorant (C) Counter Strike (D) League of Legend      (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 3
  } else if (perguntas == 3) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta3").disabled = true;
      document.getElementById("lista3").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta3").disabled = true;
      document.getElementById("lista3").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) Limbo (B) Katana ZERO (C) Subway Surfers (D) Horizon Chase Turbo      (Exemplo: A)")
      verficiarAlternativa()
    }
  } else if (perguntas == 4) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta4").disabled = true;
      document.getElementById("lista4").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta4").disabled = true;
      document.getElementById("lista4").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) Hollow Knight (B) Hornet (C) False Knight (D) Watcher Knights      (Exemplo: A)")
      verficiarAlternativa()
    }
  } else if (perguntas == 5) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta5").disabled = true;
      document.getElementById("lista5").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta5").disabled = true;
      document.getElementById("lista5").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) C++ (B) Html (C) Java (D) Java-Script    (Exemplo: A)")
      verficiarAlternativa()
    }

    //Pergunta 6
  } else if (perguntas == 6) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta6").disabled = true;
      document.getElementById("lista6").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta6").disabled = true;
      document.getElementById("lista6").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) Miss Fortune (B)  Ahri (C) Ornn (D) Soraka            (Exemplo: A)")
      verficiarAlternativa()
    }

      //Pergunta 7
  } else if (perguntas == 7) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta7").disabled = true;
      document.getElementById("lista7").style.color = "greenyellow";
      pontosJogador = pontosJogador + 1
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta7").disabled = true;
      document.getElementById("lista7").style.color = "red";
      alert("Você Errou")
    } else {
      alert("Você digitou um valor invalido")
      resposta = prompt("(A) 7 (B) 6 (C) 4 (D) 5           (Exemplo: A)")
      verficiarAlternativa()
    }
  }
}
  // --- function que exibe o resultad --- //
function finalizarJogo(){
  document.getElementById("botao-pergunta7").disabled = true;
  document.getElementById("botao-result").style.display = "none";
  if(pontosJogador <= 3 ){
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " Sua pontuação foi de <span style='color: red'>" + pontosJogador + "</span>"
  }else if(pontosJogador >3 && pontosJogador <=6){
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " Sua pontuação foi de <span style='color: orange'>" + pontosJogador + "</span>"
  }else if(pontosJogador >= 7){
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " Sua pontuação foi de <span style='color: green'>" + pontosJogador + "</span>"
  }
}
function sobePagina() {//essa função é chamada quando todo o body carrega. ele retorna o scroll para a posição inicial.
  return window.scrollTo(0, 0)
}

