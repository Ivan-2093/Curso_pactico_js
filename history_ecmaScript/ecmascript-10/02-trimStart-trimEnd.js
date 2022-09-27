const hello = '         Hola mundo!         ';
const string = `${hello}`;
console.log(string);
console.log(string.trimStart()+'mmmm'); // $trimStart Elimina espacios al inicio
console.log(string.trimEnd()+'mmmm'); //$trimEnd Elimina espacios al final
console.log(string.trim()+'mmmm'); //$trim Elimina espacios al inicio y al final