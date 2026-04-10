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
//what kind of properties object should have

interface Student{
    name:String
    age:number
    isActive:boolean
}
//create a object
let s1:Student={
    name:"abc",
    age:343,
    isActive:false
}
//example
interface Order{
    orderId:number
    Product:String
    isDelivered:boolean
    customerName:String
}

let order1:Order={
    orderId: 1,
    Product: "Laptop",
    isDelivered: true,
    customerName: "Khushi"
}

function printOrder(){
    console.log(order1.orderId)
    console.log(order1.Product)
    console.log(order1.isDelivered)
    console.log(order1.customerName)
}

//Union and intersection types
//Union defines that one datatype can have multiple value
let value : String | number
value = "khushipatel"
value = 12

function a(Id:String | number){
    console.log("Id is: ",Id)
}
a(12)
a("khushipatel")