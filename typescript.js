"use strict";
//Typescript
// ts is superset of js
//add all the types
//debugging and error finding is easy
//js
// let age = 475
// age = "hii"
// age: true
// //typescript
// let age:number=56
// age="hkbjs" //error not allowed
//npm install -g typescript
//type system in ts
//what kind of data variable can hold
// let name1 : string = "test"
// let age : number = 35
// let isStudent : boolean=true
// //arr
// let number : number[] = [1,2,23,3]
// let names : string[] = ["a","b","c"]
// //object
// let user : {name:string , age:number}={
//     name: "khushi",
//     age: 50
// }
//run the ts file
// tsc filename.ts
//interfaces
//define the scructure of the object
// //what kind of properties object should have
// interface Student{
//     name:String
//     age:number
//     isActive:boolean
// }
// //create a object
// let s1:Student={
//     name:"abc",
//     age:343,
//     isActive:false
// }
// //example
// interface Order{
//     orderId:number
//     Product:String
//     isDelivered:boolean
//     customerName:String
// }
// let order1:Order={
//     orderId: 1,
//     Product: "Laptop",
//     isDelivered: true,
//     customerName: "Khushi"
// }
// function printOrder(){
//     console.log(order1.orderId)
//     console.log(order1.Product)
//     console.log(order1.isDelivered)
//     console.log(order1.customerName)
// }
// //Union and intersection types
// //Union defines that one datatype can have multiple value
// let value : String | number
// value = "khushipatel"
// value = 12
// function a(Id:String | number){
//     console.log("Id is: ",Id)
// }
// a(12)
// a("khushipatel")
// //intersection in ts
// //combines multiple types into one 
// //value satisfy all the types
// type A = {name:string}
// type B = {age:number}
// type c = A & B
// //Example
// type Employee = {name:string}
// type Manager = {depart:string}
// type ManagerEmp = Employee & Manager
// let emp:ManagerEmp = {
//     name:"Khushi",
//     depart:"IT"  //intersection - > AND
// }
// type User = {email:string}
// type pass = {pass:string}
// //secure user
// type secureUser = User & pass
// //Type interference and narrowing
// //type inference
// //ts will automatically guesses the type 
// let name = "test" //inferred as string
// //type narrowing
// //ts reduces type based on conditions
// function Test(value:string | number){
//     console.log(value.toUpperCase())
// };
//ex2
// function login(input: string | boolean){
//     if(typeOf input == "string"){
//         console.log("username",input);
//     }
//     else{
//         console.log("status",input); 
//     }
// }
// login("Khushi");
// console.log("--------------");
// login(true);
//Generics
//you can write reusable code
//write type once and can be used for any type

function identity(data) {
    return data;
}
function getData(data) {
    return data;
}
getData("Hello");
getData(1223);
