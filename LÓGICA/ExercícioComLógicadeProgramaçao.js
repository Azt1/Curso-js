//Escreva uma funçao qe recebe 2 numeros e retorne o maior deles
// forma mais curta de ser feito
const max2 = (x,y) => x > y ? x : y;
console.log(max2(10, 5));


///////////////////////////////
function max(x, y) {
   if (x > y) {
    return x;
   } else {
    return y;
   }
};

const maior = max(1, 2);

console.log(maior);
console.log(max(1, 2)); // outra forma de chamar o resltado
