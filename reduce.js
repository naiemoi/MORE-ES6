const numbers=[3,6,9,1,5];
let sum=0
// for(const num of numbers){
//     sum+=num
// }
const total=numbers.reduce((acc,cur)=>acc+cur,0)
console.log(total)
console.log(sum)