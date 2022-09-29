console.log('ReplaceAll');

const frase = "Javascript es un maravilloso lenguaje de programación";

console.log(frase);

const ReplaceFrase = frase.replace('Javascript',"Typescript");

console.log(ReplaceFrase);


const fraseFrutas = "Manzana es una fruta, Manzana es buena para la salud";
//Replace => Remplaza solo el primer parametro encontrado
console.log(fraseFrutas.replace('Manzana','Banana'));//Banana es una fruta, Manzana es buena para la salud
//Replace => Remplaza todos los parametro encontrados
console.log(fraseFrutas.replaceAll('Manzana','Banana'));//Banana es una fruta, Banana es buena para la salud