const verdadeira = true

// //let tem escopo de bloco {... bloco}
// // var só tem escopo de funçao

// let nome ='igor'; // criando
// var nome2 = 'igor'; //criando

// if (verdadeira) {
//     let nome = 'alexandre'; //criando
//     var nome2 = 'Rogério'; // redeclarando
    
// if(verdadeira) {
//     var nome2 = 'Ronaldo'; // redeclarando
//     let nome = 'outra coisa';    
//     }
// }

// console.log(nome, nome2)

//ESCOPO DE FUNÇAO ABAIXO

function falaOi () {
    //console.log('Oi') // esse console.log só funciona dentro da funçao com var se for retirar para fora de funçao nao funcionará
    let nome = 'luiz';
    var sobrenome = 'miranda';   
}
    console.log(sobrenome)
falaOi();