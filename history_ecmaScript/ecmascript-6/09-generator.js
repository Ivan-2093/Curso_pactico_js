function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar','Daniel','Sergio', 'Ivan']);

console.log(it.next().value);//Oscar
console.log(it.next().value);//Daniel
console.log(it.next().value);//Sergio
console.log(it.next().value);//Ivan
console.log(it.next().value);//Undefined
console.log(it.next().value);//Undefined
console.log(it.next().value);//Undefined
console.log(it.next().value);//Undefined