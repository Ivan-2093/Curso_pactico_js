let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.includes(10));
console.info(numbers);


const list = ['Oscar','Sergio','Lina','Daniela','Angie','Ludy'];
console.count(list);
console.log(list.includes('Sergio',1));


// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
console.log(frutas[0].includes("man")); // true