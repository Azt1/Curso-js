/*
Primitivos(imutáveis) - string , number , boolean , undefined,
null(bigint, symbol) - Valor 

Referência(mutável) = array ,  object, function
*/


 const a = {
   nome: 'igor' ,
   sobrenome:'alexandre'
 };
const b = {...a}

b.nome = 'joao';
console.log(a);
console.log(b);

// let a = [1, 2, 3,];
// let b = a;
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a,c);

// a.push('Luiz');
// console.log(c);