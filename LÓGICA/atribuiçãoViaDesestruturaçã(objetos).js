const pessoa = {
    nome: 'Igor',
    sobrenome: 'alexandre',
    idade: 22,
    endereço:{
        rua:'Av brasil',
        numero:320
    }
};

//atribuiçao via desestruturaçao
const{nome} = pessoa;
console.log(nome);


// atribuiçao normal
// const nome = pessoa.nome
// console.log(nome)