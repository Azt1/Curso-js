// Escreva um funçao que recebe um número e
// retorne o seguinte:
// Número é divisivel por 3 = fizz
// Número é divisivel por 5 = buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número Não é divisível por 3 e 5 = retorna o proprio número
// Checar se o número é realmente um número = retorna o próprio número
// Use a função com números de 0 a 100

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    return numero;
};

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}

console.log(fizzBuzz(3, 5));