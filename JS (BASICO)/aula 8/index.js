const nomeCompleto = 'Joao Almeida de barros'
const peso = 84
const altura = 1.77
const idade = 25
const imc = altura * 2 
const resultado = peso / imc
console.log(resultado)
console.log (nomeCompleto,'tem', idade ,'anos', altura,'de altura', peso,'e quilos eo seu IMC está',resultado, )
//outra formar de fazer isso e com template string exemplo:\/

console.log(`${nomeCompleto} tem ${idade} anos ${altura} de altura ${peso} kg eo seu IMC está ${resultado}`)