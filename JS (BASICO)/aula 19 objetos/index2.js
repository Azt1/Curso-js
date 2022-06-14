function criaPessoa (nome, sobrenome,idade) {
return{nome:nome ,
       sobrenome: sobrenome ,
       idade: idade

   };
}
const pessoa1 = criaPessoa('igor', 'alexandre', 22);
const pessoa2 = criaPessoa('douglas', 'leao', 30);
const pessoa3 = criaPessoa('silvio', 'santos', 80);
const pessoa4 = criaPessoa('rosemary', 'bittencourt', 49);
const pessoa5 = criaPessoa('nathalia', 'leao', 31);

console.log(pessoa1.nome,pessoa1.sobrenome);