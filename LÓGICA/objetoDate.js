// o getdate() vai pegar o dia do mes na data atual
// o getday() vai pega o dia da semana  (domingo a sabado)
// o getMonth() vai pegar o mes atual 
// o getFullyear() vai pegar o ano em formato de 4 digitos
// o gethours() vai pegar a hora atual
// o getMinutes() vai pegar os minutos atuais
// o  getSeconds() vai pegar os segundos
// o getMilliseconds() vai pegar o milisegundos
/* o getTime vai pegar quantidade de milisegundos
  do dia primeiro de janeiro de 1970(marco zero) 
  ate o horario atual
*/ 


const data = new Date();
console.log(data.getTime());