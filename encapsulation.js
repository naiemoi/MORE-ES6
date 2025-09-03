class Vehicle{
    #tin;
    constructor(type,brand,price){
         this.type=type;
         this.brand=brand;
         this.price=price;
         this.#tin='3344er43';
    }
    getTin(){
        return this.#tin;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1=new Vehicle('car','Honda','55000')
const car2=new Vehicle('car','Toyota',400000)
// car1.getThis();
// car2.getPrice();
console.log(car1)
// console.log(car1.getPrice())
// console.log(car2.getPrice())
const student={
    name:'naiem',
    score:55,
    getScore:function(){
        console.log(this)
    },
    getScoreArrow:()=>{
        console.log(this)
    }
}
//get error because this is private
//console.log(car1.#tin)
// student.getScore()
// student.getScoreArrow()
// console.log('ultimate this',this)