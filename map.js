const numbers=[3,4,56,6,7];
// const double=[]
// for(const num of numbers){
//     const result=num*2;
//     double.push(result);
// }
// const doubleIt=x=>x*2;
// const double=numbers.map(doubleIt)

const doubleIt=numbers.map(x=>x*2)
console.log(doubleIt)


const friends=['kabir','gupi','rakib'];
const nameLength=friends.map(name=>name.length)
const firstLetter=friends.map(name=>name[0])
console.log(nameLength);
console.log(firstLetter)
const result1=numbers.map((num,index)=>{
    //console.log(num*index);
    return num*index;
})
console.log(result1)