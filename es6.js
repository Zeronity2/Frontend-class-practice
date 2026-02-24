//ES6 concept 
    //arrow function
    const add =(a,b)=>a+b
    console.log(add(5,6))

//template literals
let name1 = "KHUSHI"
console.log(`Hello , ${name1}`)

//Destructuring
//extract the values
const user = {name:"khushi",age:19}
const {name, age}=user
console.log(name,age);

//spread operator(...)
//copy //merge array or object
const a1 = [1,2,3]
const a2= [...a1,4,5,6]
console.log(a2) ;