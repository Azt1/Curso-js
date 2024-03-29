    function criaHoraDosSegundos (segundos) {
        const data = new Date (segundos * 1000);
        return data.toLocaleTimeString ('pt-BR',{
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function iniciarRelogio () {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
       
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer); //isso já garante que não vai dar um bug de 2 timer na página.
    iniciarRelogio();
});

parar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer);
});

reset.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
});



