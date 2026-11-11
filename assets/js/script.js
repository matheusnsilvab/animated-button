const botao = document.getElementById("meuBotao");
const somClique = document.getElementById("somClique");

// Função para gerar uma cor aleatória em formato HEX
function corAleatoria() {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

// Quando aperta o botão do mouse em cima dele
botao.addEventListener("mousedown", () => {
  botao.classList.add("afundado");

  // Toca o som do clique
  somClique.currentTime = 0;
  somClique.play();
});

// Quando solta o botão do mouse
botao.addEventListener("mouseup", () => {
  botao.classList.remove("afundado");

  // Aplica a cor aleatória no fundo da página
  document.body.style.backgroundColor = corAleatoria();
});

// Caso o mouse saia de cima do botão enquanto pressionado
botao.addEventListener("mouseleave", () => {
  botao.classList.remove("afundado");
});
