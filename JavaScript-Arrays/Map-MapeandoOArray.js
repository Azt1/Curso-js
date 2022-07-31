//DOBRE OS NÚMEROS

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDrobro = numeros.map(function(valor) {
    return valor*2
});
// console.log(numerosEmDrobro)



// para cada elemento:
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto

const pessoa = [
    {nome: 'Minoca', idade: 62 },
    {nome: 'Igor', idade: 23 },
    {nome: 'Oswaldo', idade: 55 },
    {nome: 'Camilly', idade: 19 },
    {nome: 'Arthur', idade: 32 },
    {nome: 'Rosiana', idade: 47 },
]

const alteraNome = pessoa.map(function(valor) {
   return valor.nome
});

const idades = pessoa.map(function(valor) {
    delete valor.nome;
    return valor 
});

const comIds = pessoa.map(function(valor,indice){
    valor.id = indice
    return valor
});

console.log(idades)

