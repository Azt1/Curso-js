const pessoa1 = {
nome:'igor',
sobrenome:'alexandre',
idade: 22,

fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
},

    incrementaIdade()  {
        this.idade++;
    }
};

pessoa1.fala()