 // console.log('Linha 0');
 // console.log('Linha 1');
 // console.log('Linha 2');
 // console.log('Linha 3');
 // console.log('Linha 4');
 // console.log('Linha 5');
 // console.log('Linha 6');


 // o bloco do for nao tem ; no final
// i significa index
 for (let i = 0; i <= 6; i++ ) {
    // console.log(`Linha ${i}`); para fazer a repetiçao
    const par = i % 2 === 0 ? 'par' : 'impar'; // para checar se o numero é par 
    console.log(i, par);
}
 