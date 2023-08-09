let pontosJogador = 0
let perguntas = 0;
const nomeJogador = document.getElementById("nome");

const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  while (nomeJogador.value === "") {
    document.getElementById("erroNome").style.display = "block";
    document.getElementById("nome").style.border = "3px solid red";
    document.getElementById("titulo-menu").style.marginBottom = "50px";
    break
  }
  if (nomeJogador.value != "") {
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
    perguntaAtual = 1;
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
    alert("Qual desses Campeões do jogo league of legends é a melhor opção para jogar na Top Lane?")
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
//Pergunta 08
const botaoPergunta8 = document.getElementById("botao-pergunta8")
botaoPergunta8.addEventListener("click", function oitavaPergunta() {
  if (perguntas == 7) {
    alert("Qual é o mascote icônico da Nintendo, conhecido por aparecer em jogos como Super Mario, Mario Kart e Super Smash Bros?")
    resposta = prompt("(A) Donkey Kong (B) Pikachu (C) Link (D) Mario  (Exemplo: A)")
    perguntas = 8;
  }
  verficiarAlternativa()

})

const botaoPergunta9 = document.getElementById("botao-pergunta9")
botaoPergunta9.addEventListener("click", function nonaPergunta() {
  if (perguntas == 8) {
    alert("No jogo Free Fire, o quanto de dano base é causado em um Headshot utilizando uma pistola desert ?")
    resposta = prompt("(A) 0 (B) 329 (C) 495 (D) 369  (Exemplo: A)")
    perguntas = 9;
  }
  verficiarAlternativa()

})

const botaoPergunta10 = document.getElementById("botao-pergunta10")
botaoPergunta10.addEventListener("click", function decimaPergunta() {
  if (perguntas == 9) {
    alert("Qual é o nome da série de jogos em que você explora um mundo de fantasia como o personagem chamado Link?")
    resposta = prompt("(A) The Legend Of Zelda (B) Final Fantasy (C) The Elders Scrolls (D) Lego  (Exemplo: A)")
    perguntas = 10;
  }
  verficiarAlternativa()

})

const botaoPergunta11 = document.getElementById("botao-pergunta11")
botaoPergunta11.addEventListener("click", function decimaPrimeiraPergunta() {
  if (perguntas == 10) {
    alert("Qual destes jogos é conhecido pelo seu acrônimo \"LoL\"?")
    resposta = prompt("(A) League of Legends (B) The Legend Of Zelda (C) Lord of the Rings (D) Among Us  (Exemplo: A)")
    perguntas = 11;
  }
  verficiarAlternativa()

})

const botaoPergunta12 = document.getElementById("botao-pergunta12")
botaoPergunta12.addEventListener("click", function decimaSegundaPergunta() {
  if (perguntas == 11) {
    alert("Em qual linguagem de programação foi desenvolvido o clash royale")
    resposta = prompt("(A) C# (B) JAVA (C) CSS (D) C++ (Exemplo: A)")
    perguntas = 12;
  }
  verficiarAlternativa()

})

//botão avançar
function proximo() {
  if (perguntas == 1) {
    location.href = "#container3";
  } else if (perguntas == 2) {
    location.href = "#container4";
  } else if (perguntas == 3) {
    location.href = "#container5";
  } else if (perguntas == 4) {
    location.href = "#container6";
  } else if (perguntas == 5) {
    location.href = "#container7";
  } else if (perguntas == 6) {
    location.href = "#container8";
  } else if (perguntas == 7) {
    location.href = "#container9";
  } else if (perguntas == 8) {
    location.href = "#container10";
  } else if (perguntas == 9) {
    location.href = "#container11";
  } else if (perguntas == 10) {
    location.href = "#container12";
  } else if (perguntas == 11) {
    location.href = "#container13";
  } else if (perguntas == 12) {
    location.href = "#parabens";
  }
}

// function para saber o fluxo das respostas
function verficiarAlternativa() {

  // Pergunta 1
  if (perguntas == 1) {
    if (resposta === "A" || resposta === "a") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("lista1").style.color = "greenyellow";
      document.getElementById("botão-proximo1").style.backgroundColor = "black";
      document.getElementById("botão-proximo1").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container3";
    } else if (resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("lista1").style.color = "red";
      document.getElementById("botão-proximo1").style.backgroundColor = "black";
      document.getElementById("botão-proximo1").style.color = "white";
      alert("Você Errou")
      location.href = "#container3";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: A)")
      verficiarAlternativa()
    }
    // Pergunta 2
  } else if (perguntas == 2) {

    if (resposta === "B" || resposta === "b") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta2").disabled = true;
      document.getElementById("lista2").style.color = "greenyellow";
      document.getElementById("botão-proximo2").style.backgroundColor = "black";
      document.getElementById("botão-proximo2").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container4";
    } else if (resposta === "A" || resposta === "a" || resposta === "C" || resposta === "c" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta2").disabled = true;
      document.getElementById("lista2").style.color = "red";
      document.getElementById("botão-proximo2").style.backgroundColor = "black";
      document.getElementById("botão-proximo2").style.color = "white";
      alert("Você Errou")
      location.href = "#container4";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Fall Guys (B) Valorant (C) Counter Strike (D) League of Legend      (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 3
  } else if (perguntas == 3) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta3").disabled = true;
      document.getElementById("lista3").style.color = "greenyellow";
      document.getElementById("botão-proximo3").style.backgroundColor = "black";
      document.getElementById("botão-proximo3").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container5";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta3").disabled = true;
      document.getElementById("lista3").style.color = "red";
      document.getElementById("botão-proximo3").style.backgroundColor = "black";
      document.getElementById("botão-proximo3").style.color = "white";
      alert("Você Errou")
      location.href = "#container5";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Limbo (B) Katana ZERO (C) Subway Surfers (D) Horizon Chase Turbo      (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 4
  } else if (perguntas == 4) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta4").disabled = true;
      document.getElementById("lista4").style.color = "greenyellow";
      document.getElementById("botão-proximo4").style.backgroundColor = "black";
      document.getElementById("botão-proximo4").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container6";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta4").disabled = true;
      document.getElementById("lista4").style.color = "red";
      document.getElementById("botão-proximo4").style.backgroundColor = "black";
      document.getElementById("botão-proximo4").style.color = "white";
      alert("Você Errou")
      location.href = "#container6";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Hollow Knight (B) Hornet (C) False Knight (D) Watcher Knights      (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 5
  } else if (perguntas == 5) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta5").disabled = true;
      document.getElementById("lista5").style.color = "greenyellow";
      document.getElementById("botão-proximo5").style.backgroundColor = "black";
      document.getElementById("botão-proximo5").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container7";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta5").disabled = true;
      document.getElementById("lista5").style.color = "red";
      document.getElementById("botão-proximo5").style.backgroundColor = "black";
      document.getElementById("botão-proximo5").style.color = "white";
      alert("Você Errou")
      location.href = "#container7";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) C++ (B) Html (C) Java (D) Java-Script    (Exemplo: A)")
      verficiarAlternativa()
    }
    //Pergunta 6
  } else if (perguntas == 6) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta6").disabled = true;
      document.getElementById("lista6").style.color = "greenyellow";
      document.getElementById("botão-proximo6").style.backgroundColor = "black";
      document.getElementById("botão-proximo6").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container8";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta6").disabled = true;
      document.getElementById("lista6").style.color = "red";
      document.getElementById("botão-proximo6").style.backgroundColor = "black";
      document.getElementById("botão-proximo6").style.color = "white";
      alert("Você Errou")
      location.href = "#container8";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Miss Fortune (B)  Ahri (C) Ornn (D) Soraka            (Exemplo: A)")
      verficiarAlternativa()
    }
    //Pergunta 7
  } else if (perguntas == 7) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta7").disabled = true;
      document.getElementById("lista7").style.color = "greenyellow";
      document.getElementById("botão-proximo7").style.backgroundColor = "black";
      document.getElementById("botão-proximo7").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container9";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta7").disabled = true;
      document.getElementById("lista7").style.color = "red";
      document.getElementById("botão-proximo7").style.backgroundColor = "black";
      document.getElementById("botão-proximo7").style.color = "white";
      alert("Você Errou")
      location.href = "#container9";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) 7 (B) 6 (C) 4 (D) 5           (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 8
  } else if (perguntas == 8) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta8").disabled = true;
      document.getElementById("lista8").style.color = "greenyellow";
      document.getElementById("botão-proximo8").style.backgroundColor = "black";
      document.getElementById("botão-proximo8").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container10";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta8").disabled = true;
      document.getElementById("lista8").style.color = "red";
      document.getElementById("botão-proximo8").style.backgroundColor = "black";
      document.getElementById("botão-proximo8").style.color = "white";
      alert("Você Errou")
      location.href = "#container10";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) Donkey Kong (B) Pikachu (C) Link (D) Mario  (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 9
  } else if (perguntas == 9) {

    if (resposta === "C" || resposta === "c") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta9").disabled = true;
      document.getElementById("lista9").style.color = "greenyellow";
      document.getElementById("botão-proximo9").style.backgroundColor = "black";
      document.getElementById("botão-proximo9").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container11";
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "D" || resposta === "d") {
      document.getElementById("botao-pergunta9").disabled = true;
      document.getElementById("lista9").style.color = "red";
      document.getElementById("botão-proximo9").style.backgroundColor = "black";
      document.getElementById("botão-proximo9").style.color = "white";
      alert("Você Errou")
      location.href = "#container11";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) 0 (B) 329 (C) 495 (D) 369  (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 10
  } else if (perguntas == 10) {

    if (resposta === "A" || resposta === "a") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta10").disabled = true;
      document.getElementById("lista10").style.color = "greenyellow";
      document.getElementById("botão-proximo10").style.backgroundColor = "black";
      document.getElementById("botão-proximo10").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container12";
    } else if (resposta === "D" || resposta === "d" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta10").disabled = true;
      document.getElementById("lista10").style.color = "red";
      document.getElementById("botão-proximo10").style.backgroundColor = "black";
      document.getElementById("botão-proximo10").style.color = "white";
      alert("Você Errou")
      location.href = "#container12";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) The Legend Of Zelda (B) Final Fantasy (C) The Elders Scrolls (D) Lego  (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 11
  } else if (perguntas == 11) {

    if (resposta === "A" || resposta === "a") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta11").disabled = true;
      document.getElementById("lista11").style.color = "greenyellow";
      document.getElementById("botão-proximo11").style.backgroundColor = "black";
      document.getElementById("botão-proximo11").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#container13";
    } else if (resposta === "D" || resposta === "d" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta11").disabled = true;
      document.getElementById("lista11").style.color = "red";
      document.getElementById("botão-proximo11").style.backgroundColor = "black";
      document.getElementById("botão-proximo11").style.color = "white";
      alert("Você Errou")
      location.href = "#container13";
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) League of Legends (B) The Legend Of Zelda (C) Lord of the Rings (D) Among Us  (Exemplo: A)")
      verficiarAlternativa()
    }
    // pergunta 12
  } else if (perguntas == 12) {

    if (resposta === "D" || resposta === "d") {
      alert("Você Acertou !")
      document.getElementById("botao-pergunta12").disabled = true;
      document.getElementById("lista12").style.color = "greenyellow";
      document.getElementById("botão-proximo12").style.backgroundColor = "black";
      document.getElementById("botão-proximo12").style.color = "white";
      pontosJogador = pontosJogador + 1
      location.href = "#parabens";
      finalizarJogo()
    } else if (resposta === "A" || resposta === "a" || resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c") {
      document.getElementById("botao-pergunta12").disabled = true;
      document.getElementById("lista12").style.color = "red";
      document.getElementById("botão-proximo12").style.backgroundColor = "black";
      document.getElementById("botão-proximo12").style.color = "white";
      alert("Você Errou")
      location.href = "#parabens";
      finalizarJogo()
    } else {
      alert("Você digitou um valor inválido")
      resposta = prompt("(A) C# (B) JAVA (C) CSS (D) C++ (Exemplo: A)")
      verficiarAlternativa()
    }
  }
}

// --- function que exibe o resultad --- //
function finalizarJogo() {
  // document.getElementById("botao-pergunta7").disabled = true;
  // document.getElementById("botao-result").style.display = "none";
  if (pontosJogador >= 0 && pontosJogador <= 3) {
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " sua pontuação foi de <span style='color: red'>" + pontosJogador + "</span>"
  }
  else if (pontosJogador > 3 && pontosJogador <= 6) {
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " sua pontuação foi de <span style='color: orange'>" + pontosJogador + "</span>"
  }
  else if (pontosJogador > 6 && pontosJogador <= 9) {
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " sua pontuação foi de <span style='color: yellow'>" + pontosJogador + "</span>"
  }
  else if (pontosJogador > 9 && pontosJogador <= 12) {
    document.getElementById("congratulaçoes").innerHTML = "Parabéns " + nomeJogador.value + " sua pontuação foi de <span style='color: green'>" + pontosJogador + "</span>"
  }
}
function sobePagina() {//essa função é chamada quando todo o body carrega. ele retorna o scroll para a posição inicial.
  return window.scrollTo(0, 0)
}

