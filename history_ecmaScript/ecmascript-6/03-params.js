/* function newUser(name, age, country) {
    let name = name || "Àlexa";
    let age = age || 24;
    let country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX"); */

function newAdmin(name = "Alexa", age = 24, country = "COL") {
    console.log(name, age, country);
}

newAdmin()
newAdmin("Oscar", 34, "MX");