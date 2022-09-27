
const list = new Set();

list.add('Item 1');
list.add('Item 2').add('Item 3');


console.log(list.has('Item 1'));
console.log(list.size);

//Array permite valores duplicados
const array = [1,2,3,4,5,6,1,2,3,4,5,6];
//Convertimos el array a set. Set no permite valores duplicados
const lista= new Set(array);
console.log(array);
console.log(lista);

