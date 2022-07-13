// Closure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a funçao
// é executada fora desse escopo léxico
function retornaFunçao(nome) {
    return function() {
        return nome;
    };
}

const funçao = retornaFunçao('Luiz');
const funçao2 = retornaFunçao('Joao');
console.dir(funçao);
console.dir(funçao2);