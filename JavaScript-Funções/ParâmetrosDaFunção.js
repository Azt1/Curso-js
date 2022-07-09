function args () {
    console.log(arguments[6])

}
args('valor', 3 ,2 ,5 ,6 , 0, 'luiz');


// Se fosse para fazer um funçao de somar dois numeros 
function funçao (a, b = 2) { //forma nova
    //b = b || 2 ; // forma antiga
    console.log(a + b);
}
 funçao(2);  
 
 // para pega cadastro
 function funçao2 ({nome, sobrenome, idade}) {// serve para desestruturar arrays tambem, em vez do{} é []
    console.log(nome ,sobrenome, idade);
    
}
let obj = {nome:'Igor', sobrenome: 'Alexandre', idade: 22};
funçao2(obj)



// rest operator ... é resto dos valores ex: conta (1, 2, 3, 43, 9)
// o rest operator sempre deve ser o ultimo do parametro
function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
    }
conta('+', 1, 2, 3, 43, 9);