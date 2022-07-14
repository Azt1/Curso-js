function personFactory(name) {
    let count = 0
    return{
        opa:() => count ++,
        name:name,
    };
}

const igor = personFactory('Igor')
const douglas = personFactory('douglas')

console.log(igor.opa());
console.log(igor.opa());
console.log(igor.opa());
console.log(douglas.name);