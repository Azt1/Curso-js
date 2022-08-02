const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let total = 0;
numeros.forEach(function(valor) {
    return total += valor;
});

console.log(total)
