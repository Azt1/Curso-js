  // filter -> SEMPRE RETORNA UM ARRAY, COM A MESMA QUANTIDADE DE ELEMENTOS
  // OU MENOS.

  // Retorne os números maiores que 10
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


  function callbackFilter(valor) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
  }



  const numerosFiltrados = numeros.filter(callbackFilter);
 //  forma rapida e pratica de ser feita a condicional é fazer a funçao dentro do filtro
 // ex : numeros.filter(function(valor){
 //   return valor > 10;
 // })
// console.log(numerosFiltrados)




// RETORNE AS PESSOAS QUE TEM O NOME COM 6 LETRAS OU MAIS
// RETORNE AS PESSOAS COM MAIS DE 50 ANOS
// RETORNE AS PESSOAS CUJO NOME TERMINA COM A
const pessoas = [
    {nome: 'Lucia', idade: 62},
    {nome: 'Igor', idade: 23},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Joao', idade: 55},
    {nome: 'Larissa', idade: 19},
    {nome: 'Jhonatan', idade: 32},
    {nome: 'JoaoTomate', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(function(valor) {
    return valor.nome.length >= 6;
});

const pessoasMeiaIdade = pessoas.filter(function(valor) {
    return  valor.idade > 50 
});

const nomeTerminaComA = pessoas.filter(function(valor) {
    return valor.nome.toLowerCase().endsWith('a');
})

console.log(nomeTerminaComA)