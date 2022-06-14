/*
Entre 0 - 11 - Bom dia 
Entre 12 - 17 - Boa tarde 
Entre 18 - 23 - Boa noite

*/
// if(se) poder ser usado sozinho
// Sempre que utilizo a palavra else(senão), preciso de um if inicial
// Eu posso ter vários else ifs no sistema de if else
// Só posso ter um else no final do sistema de if else

const hora = 33;

if (hora >= 0 && hora <= 11) { 
    console.log('Bom dia');
} else if (hora >= 12 &&hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite')
} else {
    console.log('Olá voçê ativou a hora secreta !');
}