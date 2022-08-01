// Some todos os numeros
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores(map)

// funçao do reduce é reduzir um array em um unico elemento 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);



const total2 = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0)acumulador.push(valor);
    return acumulador;
}, []);

console.log(total2)

const total3 = numeros.reduce(function(acumulador, valor) {
   acumulador.push(valor * 2);
    return acumulador;
}, []);

// console.log(total3)





// RETORNE A PESSOA MAIS VELHA
const pessoas = [
    {nome: 'Lucia', idade: 62},
    {nome: 'Igor', idade: 23},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Joao', idade: 55},
    {nome: 'Larissa', idade: 19},
    {nome: 'Jhonatan', idade: 32},
    {nome: 'JoaoTomate', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
});

console.log(maisVelha)