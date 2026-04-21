//Type-safe data models,
//define the structure of data clearly so that ts can check types
let username:string = "khushi"
let age:number = 1234
let isActive:boolean;
isActive = true

//object 
let user:{name:string, age:number, rollNo:number}={
    name:"kH",
    age:34,
    rollNo:34
}

//data safe model
type StuAddress={
    cityName:string
    pinCode:Number
}

type Student={
    id:number
    name:string
    course:string
    age:number
    isActive:true
    address:StuAddress
}

//create a data
let Student1:Student={
    id:43,
    name:"ch",
    course:"Btech",
    age:50,
    isActive:true,
    address:{
        cityName:"Varanasi",
        pinCode:231302
    }
}

//print
function print(Student1:Student){
    console.log("id is",Student1.id)
    console.log("name is",Student1.name)
    //same for all the properties
}