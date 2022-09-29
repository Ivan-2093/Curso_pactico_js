console.log('EL metodo at de arrays sirve para acceder a los elemetos a partir del indice');

const newArray = [0,1,'Hi',3,4,'Hi',6];


console.log(newArray.at(5));//Buscar el valor de la posición como parametro
console.log(newArray.indexOf('Hi'));//Buscar la posición donde se encuentre la primera coincidencia  del parametro


const otherArray = ['One','Two','Three','Four','Five','Six'];

console.log(otherArray.at(-1));
console.log(otherArray[otherArray.length-1]);
console.log(`Tamaño del array ${otherArray.length-1}`);
console.log(otherArray.indexOf('Three'));