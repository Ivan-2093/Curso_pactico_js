console.log('Clases #private');

class user {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        return this.age;
    }
}
const ana = new user("Ana",29);
console.log(ana.uAge = 20);
console.log(ana);