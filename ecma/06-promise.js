//Estudiar promesas en Js
const anotherFuntion = () => {
    return new Promise((resolve,reject) => {
        let num_random =  Math.random() ;
        let randomBoolean = num_random > .5;
        console.log(num_random);
        
        if (randomBoolean){
            resolve('Hey!!');
        }else {
            reject('Upss! :(');
        }
    })
}

anotherFuntion()
    .then(console.log)
    .catch(console.log); 