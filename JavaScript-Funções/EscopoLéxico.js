// eu posso acessar outras funçoes dentro da que eu estou codando


const nome = 'Igor'

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();