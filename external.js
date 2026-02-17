function external(){
    confirm('submission is done')
}

//control statemant
//if else statement

let marks = 70;
if(marks > 90){
    console.log("Grade O");
}
else if(marks > 80){
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B+");
}
else{
    console.log("Fail");
}


//switch case statement
let day = 2;
switch(day){
    case 1:
        console.log(Monday);
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
    default:
        console.log("Invalid Day");
}

//for loop
console.log("for loop: ")
for(let i =1; i<=6; i++){
    console.log(i);
}

//while loop
console.log("while loop: ")
let y = 5;
while(y<=6){
    console.log(y)
    y++
}

//do while
console.log("do while loop: ")
let d= 1;
do{
    console.log(d)
    d++
}while(d<=3)


// //functions
// function Greet(){
//   return "hello "
// }
// console.log(Greet())

// function add(a,b){
//     return a+b
// }
// console.log(add(5,6))

//arrow funstions

// const add = (a,b) =>{
//     return a+b
// }
// console.log(add(5,7))

// // const mul= (a,b) => a*b

// const sq=n=> n*n
// console.log("sq ",sq(7))  


//objects in js
const student={
    "name":"Khushi", // key and value 
    RollNo:50,
    isActive:true,
    "Course":"Btech",
    age:23,
    isEnrolled:false
}
console.log(student);

//json.stringfy() convert json obj to string
// const jsString=JSON.stringify(student)
// console.log(jsString)
// console.log(typeof"type of converted string is: ",(jsString))
// console.log("Type of student object is: ",typeof(student))


//json.parse() convert string to json obj

const data = '{"name":"khushi", "roll no.":"12", "age":"100" }'
console.log(typeof(data))
const jsobject = JSON.parse(data)
console.log(jsobject) 
console.log(typeof(jsobject))
console.log(jsobject.age)
console.log(student.name)
console.log(`student name is ${student.name} and age is ${student.age}`)
student.gender = "male"
console.log(student.gender)
const arr=['a','c','d','g']
console.log(arr)