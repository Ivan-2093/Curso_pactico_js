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
    //... => Propagación
    id: 1,...person, country
};

console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji) 

// Rest


function sum (num_1, num_2, ...resto_num) {
    let suma = num_1 + num_2 + resto_num;
    return console.log(suma);
  }
  
  sum(1,2,3,4,5);



