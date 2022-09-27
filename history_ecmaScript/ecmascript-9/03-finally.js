//Estudiar promesas en Js
const anotherFuntion = () => {
    return new Promise((resolve,reject) => {
        let num_random =  Math.random() ;
        let randomBoolean = num_random > .5;
        console.log(num_random);
        
        if (randomBoolean){
            setTimeout(() => resolve('Hey!!'), 2000)
        }else {
            setTimeout(() => reject("Whooops!"), 5000)
        }
    })
}

anotherFuntion()
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('Finalizado..'))