//let umaString = " um \"texto\"" // se quiser usar "" em uma frase 
// console.log(umaString.replace('um', 'outro')) // replace e pra substituir
let umaString = "o rato roeu a roupa do rei de roma "
console.log(umaString.charAt(0))// pega 1 letra específica
console.log(umaString.indexOf('a', 4)) // 
console.log(umaString.lastIndexOf('a',4))//faz a mesma coisa que o de cima só que de tras para frente
console.log(umaString.match(/[a-z]/g))// mostar todas as letras separadas
console.log(umaString.replace(/r/g,'#')) // replace e pra substituir
console.log(umaString.length)//para ver o tamanho da string 
console.log(umaString.substr(-5)) 
console.log(umaString.slice(2 ,7)) //serve pra fatiamento de string pegar 1 parte específica do texto
console.log(umaString.split(' ', 3))
console.log(umaString.toUpperCase())//para colocar a string toda em letra maiúscula
console.log(umaString.toLowerCase());//para colocar a string toda em letra minúscula