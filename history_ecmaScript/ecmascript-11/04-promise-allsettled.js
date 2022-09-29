const promiseOne = new Promise((resolve,reject)=>reject("Reject"));
const promiseTwo = new Promise((resolve,reject)=>resolve("Resolve"));



Promise.allSettled([promiseOne,promiseTwo])
    .then(response => console.log(response));