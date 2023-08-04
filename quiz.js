function pergunta(){
    alert("Qual foi o primeiro console lançado pela empresa nintendo ?")
    verificaPergunta1()
   
}

function verificaPergunta1(){
    let resposta= prompt("(A) Nintendinho (B) Nintendo Gameboy (C) Nintendo Wii (D) Pong       (Exemplo: (A))" )
    
    if(resposta === "(A)"){
        alert("Você Acertou !")
        document.getElementById("botao-pergunta1").disabled = true;
    }else if(resposta === "(B)" || resposta === "(C)" || resposta === "(D)"){
        document.getElementById("botao-pergunta1").disabled = true;
        alert("Você Errou")
    }else{
        document.getElementById("botao-pergunta1").disabled = true;
        alert("Valor inválido")
    }
}



let pontuação