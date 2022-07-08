// Declaração de função (Function Hoisting)

falaOi();
function falaOi() {
    console.log('Fala oi'); 
};

// First-class objects (Obejtos de primeira)
// Function espression
const souUmDado = function() {
    console.log('sou um dado.');
};
souUmDado();

// Arrow function  (RECURSO NOVO DO ECMA SCRIPT 2015.)
    
const funçaoArrow = () => {
    console.log('sou uma arrow function.')
};
funçaoArrow();


// Dentro de um objeto
const obj = {
    falar:function(){
        console.log('Estou falando...')
    }
};
obj.falar();