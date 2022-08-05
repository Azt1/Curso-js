const pessoa1 = new Object();
pessoa1.nome = 'Igor';
pessoa1.sobrenome = 'Alexandree';
pessoa1.idade = 2;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}