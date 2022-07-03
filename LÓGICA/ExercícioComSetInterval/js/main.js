    function criaHoraDosSegundos () {
        const data = new Date (segundos * 1000);
        return data.toLocaleDateString ('pr-BR',{
        hour12: false, 
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const reset = document.querySelector('.reset');
let segundos = 0;

function iniciarRelogio () {
    const timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
       
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    iniciarRelogio();
});

parar.addEventListener('click', function(event){
    relogio.innerHTML = 'cliquei no parar'
});

reset.addEventListener('click', function(event){
    relogio.innerHTML = 'cliquei no reset'
});



