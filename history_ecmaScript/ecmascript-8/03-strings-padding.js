const saludo = "Hola mundo!";

console.log(saludo.length);
console.log(saludo.padStart(saludo.length+1, '_'));
console.log(saludo.padEnd(saludo.length+1, '_'));


const numero = "111";
console.log(numero.padStart(4, '0'));