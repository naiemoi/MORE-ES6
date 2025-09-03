const students=[
    {name:'naiem',id:333,marks:99},
    {name:'rakib',id:433,marks:89},
    {name:'kabir',id:3363,marks:69},
    {name:'mafia',id:633,marks:9}
]
const names=students.map(student=>student.name)
const goodStudents=students.filter(student=>student.marks>60)
const goodStudent=students.find(student=>student.marks>80)
console.log(goodStudent)
console.log(goodStudents)
//console.log(names)