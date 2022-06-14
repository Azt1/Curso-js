const numero = Number(prompt('digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById ('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Raiz quadrada do seu numero é ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é NaN :${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro :${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> o numero arredondado para baixo é : ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> o numero arredondado para cima é : ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> o numero com duas casas decimais : ${numero.toFixed(2)} </p>`;