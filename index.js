let pontosJogador = 0
let perguntas = 0;


const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  const nomeJogador = document.getElementById("nome");
  if (nomeJogador.value === "") {
    document.getElementById("erroNome").style.display = "block";
  } else {
    location.href = "#container2";
  }
});


// Perguntas ex: primeiraPergunta; segundaPergunta...
const botaoPergunta1 = document.getElementById("botao-pergunta1")
botaoPergunta1.addEventListener("click", function primeiraPergunta(){
  if(perguntas == 0){ 
  alert("Qual foi o primeiro console lançado pela empresa nintendo ?")
  resposta = prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: A)")
  perguntas = 1;
  }
  verficiarAlternativa()
  
})


const botaoPergunta2 = document.getElementById("botao-pergunta2")
botaoPergunta2.addEventListener("click", function segundaPergunta(){
  if(perguntas == 1){ 
  alert("Qual desses jogos a personagem Jett pertence ?")
  resposta = prompt("(A) Fall Guys (B) Valorant (C) Counter Strike (D) League of Legend      (Exemplo: A)")
  perguntas = 2;
  }
  verficiarAlternativa()
  
})

// function para saber o fluxo das respostas

function verficiarAlternativa(){

    // Pergunta 1
  if(perguntas == 1){
    if(resposta === "A" || resposta === "a"){
      alert("Você Acertou !")
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("certo1").style.display = "block";
      pontosJogador = pontosJogador+1
  }else if(resposta === "B" || resposta === "b" ||  resposta === "C" || resposta === "C" || resposta === "D" || resposta === "d"){
      document.getElementById("botao-pergunta1").disabled = true;
      document.getElementById("errado1").style.display = "block";
      alert("Você Errou")
  }else{
      
      alert("Valor inválido")
  }
  // Pergunta 2
}else if (perguntas == 2){

  if(resposta === "B" || resposta === "b"){
    alert("Você Acertou !")
    document.getElementById("botao-pergunta2").disabled = true;
    document.getElementById("certo2").style.display = "block";
    pontosJogador = pontosJogador+1
}else if(resposta === "A" || resposta === "a" ||  resposta === "C" || resposta === "C" || resposta === "D" || resposta === "d"){
    document.getElementById("botao-pergunta2").disabled = true;
    document.getElementById("errado2").style.display = "block";
    alert("Você Errou")
}else{
    
    alert("Valor inválido")
}
// pergunta 3
}else if (perguntas == 3){

  if(resposta === "D" || resposta === "d"){
    alert("Você Acertou !")
    document.getElementById("botao-pergunta1").disabled = true;
    document.getElementById("certo1").style.display = "block";
    pontosJogador = pontosJogador+1
}else if(resposta === "A" || resposta === "a" ||  resposta === "B" || resposta === "b" || resposta === "C" || resposta === "c"){
    document.getElementById("botao-pergunta1").disabled = true;
    document.getElementById("errado1").style.display = "block";
    alert("Você Errou")
}else{
    
    alert("Valor inválido")
}
}
}

function sobePagina(){
  return window.scrollTo(0, 0)
}