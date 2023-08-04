const botao = document.getElementById("btn");
botao.addEventListener("click", function verificarNome() {
  const nomeJogador = document.getElementById("nome");
  if (nomeJogador.value === "") {
    document.getElementById("erro").style.display = "block";
  } else {
    location.href = "#";
  }
});
