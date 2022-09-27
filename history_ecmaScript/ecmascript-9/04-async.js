async function* anotherFuntion() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(12);
    yield await Promise.resolve(13);
}

const other = anotherFuntion();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hola');


async function arrayOfNames(array) {
    for await (let value of array){
        console.log(value);
    }
}


arrayOfNames(['Oscar','Sergio','Ivan']);
console.log('After');