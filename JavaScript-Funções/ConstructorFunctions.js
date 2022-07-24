// Funçao construtora -> constroi objetos
// Funçao fabrica -> fabrica objetos
// na funçao CONSTRUTORA a gente tem que mudar a convensao de como a gente escreve as funçoes
// na CONSTRUTORA SEMPRE TEM QUE INICIAR SEU NOME COM LETRA MAIUSCULA 
// EX: function Pessoa(new)

function Pessoa(nome, sobrenome) {
    //atributos ou metodos PRIVADOS
    const ID = 123456;
    const metodoInterno = function() {};
        // Atributos ou metodos PUBLICOS
        this.nome = nome;
        this.sobrenome = sobrenome;

        this.metodo = function() {
            console.log(this.nome + ':sou um metodo')
        };
}

    const p1 = new Pessoa ('Igor', 'Alexandre');
    const p2 = new Pessoa('Rosemary', 'Bittencourt')
    p2.metodo();