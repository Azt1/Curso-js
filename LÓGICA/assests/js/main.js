//Capturar o evento de submit do formulário
const form = document.querySelector('#formulário');

form.addEventListener('submit', function (e) {
    e.preventDefault ();
    console.log('evento previnido.');
    setResultado('olá mundo');
});


function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement ('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'qualquer coisa';
    resultado.appendChild(p);
}