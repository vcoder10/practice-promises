debugger;
class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSupperCute(){
        return this.age<=2;
    }
}
const animal1= new Animal ('andy', 3);
console.log(animal1.eat())

const animal2= new Animal ('toni', 1);
console.log(animal2.eat())


