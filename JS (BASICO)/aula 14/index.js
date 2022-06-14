let num1 = 0.7 //number
let num2 = 0.1// number

num1 = ((num1 * 100) + (num2 * 100)) / 100  // 0.8    
num1 = ((num1 * 100) + (num2 * 100)) / 100  // 0.9 FORMA SIMPLES MATEMATICA
num1 = ((num1 * 100) + (num2 * 100)) / 100  // 1.0


//num1 = parseFloat(num1.toFixed(2)) // se tirar esse codigo vai ter imprecisao 

console.log(num1)

console.log(Number.isInteger(num1))

// console.log(num1.toString() + num2) //  aqui só altera na hora
// num1 = num1.toString() // essa altera pra sempre do codigo em diante
// console.log(num1.toString(2)) //transforma em codigo binário
// console.log(num1.toFixed(2)) // escolhe quantas casas decimais você quer no número
// console.log(Number.isInteger(num1))// ver se o número é um inteiro ou nao
// let temp = num1 * 'olá' 
// console.log(Number.isNaN(temp)) //pergunta se a variael citada é um NaN


//num1 += num2 // 0.8 
//num1 += num2 // 0.9
//num1 += num2 // 1.0
//num1 += num2 // 1.1
//num1 += num2 // 1.2
//num1 += num2 // 1.3   forma longa de fazer a conta
//num1 += num2 // 1.4
//num1 += num2 // 1.5
//num1 += num2 // 1.6 
//num1 += num2 // 1.7
//num1 += num2 // 1.8
//num1 += num2 // 1.9
//num1 += num2 // 2.0