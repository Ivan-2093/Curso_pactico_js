
function newUser (user,age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Sergio',29,'COL',1));