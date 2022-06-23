function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0 :
            diaSemanaTexto = 'Domingo' ;
            return diaSemanaTexto;
        case 1 :
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2 : 
            diaSemanaTexto = 'Terça';   
            return diaSemanaTexto;
        case 3 : 
            diaSemanaTexto = 'Quarta';   
            return diaSemanaTexto;
        case 4 : 
            diaSemanaTexto = 'Quinta';   
            return diaSemanaTexto;
        case 5 : 
            diaSemanaTexto = 'Sexta';   
            return diaSemanaTexto; 
        case 6 : 
            diaSemanaTexto = 'Sábado';   
            return diaSemanaTexto;
        
            default :
            diaSemanaTexto = '';
         } 
}

const data = new Date('1985-04-19 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);



console.log(diaSemanaTexto);

//  if (diaSemanaTexto === 0) {
//     console.log('Domingo')
// }   else if (diaSemanaTexto === 1) {
//     console.log('Segunda-feira');
// }   else if (diaSemanaTexto == 2) {
//     console.log('Terça-feira')
// }   else if (diaSemanaTexto === 3) {
//     console.log('Quarta-feira')
// }   else if (diaSemanaTexto === 4) {
//     console.log ('Quinta-feira')
// }   else if (diaSemanaTexto === 5) {
//     console.log ('Sexta-feira')
// }   else if (diaSemanaTexto === 6) {
//     console.log('Sábado')
// } else {
//     console.log('')
// }
    
