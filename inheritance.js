class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    constructor(name,brreed,age){
        super(name,age)
        this.brreed=brreed;
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}
class Cat extends Animal{
    constructor(name,color,age){
        super(name,age)
        this.age=age;
    }
    meow(){
        console.log(`${this.name} is barking`)
    }
}
const dog1= new Dog('coffee','deshi',4)
// dog1.eat()
console.log(dog1)
const cat1=new Cat('pussy','white',12)
cat1.eat()