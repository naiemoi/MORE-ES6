/*
class -->templete
properties
method

object
*/

class Player {
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.location='bangladesh';
        //console.log('calling the constructor',name)
    }
    goal(){
        console.log('score a goal')
    }
    getTeanName(){
        return 'kkkkkkk';
    }
}
const Player1=new Player('tom basfaa',44)
const Player2=new Player('jjjjjj',11)
//Player1.goal()
//console.log(Player1 instanceof Player)
console.log(Player1 instanceof Player)
console.log(Player2)