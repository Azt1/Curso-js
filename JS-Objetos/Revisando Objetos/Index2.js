//Factory functions / Constructor Functions / Classes

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // nenhum objeto feito nessa funçao pode ser ALTERADO

}

const p1 = new Pessoa('Igor', 'Alexandre');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1)
console.log(p2)