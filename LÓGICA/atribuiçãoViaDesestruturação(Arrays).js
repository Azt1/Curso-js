// ... rest para pegar o resto do array,  ...spread para espalhar 
//                    0          1          2
//                 0  1  2    0  1  2    1  2  3 
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [, [,, seis]] = numeros

//formar de pegar um numero específico
console.log (numeros[1][2]);
console.log(seis)



//para pular o array é só colocar valores vazios
//EX: const [um, , tres, , cinco, , sete]
// console.log(um, tres, cinco, sete,)
