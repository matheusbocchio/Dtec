const botaoCard = document.querySelector(".produto-card");
const resultado = document.querySelector(".resultado");
function botaoproduto() {
 
  const nomeProduto = botaoCard.querySelector(".nomeProduto").textContent;
  const descricao = botaoCard.querySelector(".descricao").textContent;
  const valor = botaoCard.querySelector(".valor").textContent;

  resultado.innerHTML += `<p> ${nomeProduto}, ${descricao}, ${valor}</p>`
}