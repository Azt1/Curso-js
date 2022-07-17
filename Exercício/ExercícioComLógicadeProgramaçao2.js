// escreva uma funçao chamada ePaisagem que 
// recebe doi argumentos, largura e altura
// de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem


//
// forma com arrow function 
// const ePaisagem = (largura, altura) => largura > altura;
//

function ePaisagem(largura, altura) {
    return largura >= altura ? true : false;
 }

console.log(ePaisagem(1920,1080))