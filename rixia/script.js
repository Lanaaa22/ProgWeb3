var contadorCliques = 0;
function moverBotao() {
    contadorCliques++;
    var botao = document.getElementById("meuBotao");
    var novaPosicaoTop = Math.random() * 300; // gera uma nova posição top aleatória entre 0 e 300 pixels
    var novaPosicaoLeft = Math.random() * 300; // gera uma nova posição left aleatória entre 0 e 300 pixels
  
    botao.style.top = novaPosicaoTop + "px";
    botao.style.left = novaPosicaoLeft + "px";

    if (contadorCliques === 3) {
        var paragrafo = document.getElementById("meuParagrafo");
        paragrafo.innerHTML = "PARABÉNS! voce ganhou 1000 reais e um aphone 12"
        paragrafo.style.display = "block";
      }
  }