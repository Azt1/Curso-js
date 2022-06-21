//  (condiçao)  ? 'Valor  para verdadeiro' :'Valor para falso'
const pontuaçaoUsuario = 120    00;
const nivelUsuario = pontuaçaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log (nivelUsuario, corPadrao);

// if (pontuaçaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }