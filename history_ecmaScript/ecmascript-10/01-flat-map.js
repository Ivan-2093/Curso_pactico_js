console.log('Hola amigos!');
// flat
const array = [1,2,3,4,5,6,7,8,9,['a','b','c',['01','02','03']]];

console.table(array);

console.log(array.flat(Infinity));
console.log(array.flat(2));
// flatmap

console.log('Hola amigos!');
// flat
const array2 = [1,2,3,4];

console.table(array2);

console.log(array2.flatMap(v => [v,v * 2]));
