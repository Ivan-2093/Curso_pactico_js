//arrays destructuring

let fruits = ['Apple','Banana'];

let [a,b] = fruits;

console.log(a,b);
console.log(a,fruits[1]);

//Objetc destructuring

let user = {
    username : 'Oscar',
    age : 24
}

let {username,age} = user;

console.log(username,age);


//Spread operator

let person = {name:'Oscar',age:28};
let country = 'MX';

let data = {
    //... => PropagaciΓ³n
    id: 1,...person, country
};

console.log(data);

let kissEmoji = [..."π©ββ€οΈβπβπ©"]
console.log(kissEmoji)

let familyEmoji = [..."π¨βπ©βπ¦βπ¦"]
console.log(familyEmoji) 

// Rest


function sum (num_1, num_2, ...resto_num) {
    let suma = num_1 + num_2 + resto_num;
    return console.log(suma);
  }
  
  sum(1,2,3,4,5);



