// declaration in js
// var k = 12;
// let s = 23;
// const c = 50;

// redeclaration with var
// var a = 5;
// var a = 3;// redeclarartion is allowed in var 
// console.log("value of a is: ",a);

// redeclaration with let
// let b = 7;
// let b = 5;
// console.log("value of b is: ",b);

//const
// const t = 12;
// const t = 15;
// console.log(t);


//reassignment
//var
// var a = 3;
// a = 45;
// console.log("value of a is: ",a);

// //let
// let b = 56;
// b = 46;
// console.log("value of b is: ",b);

//const
// const c = 10;//not allowed
// c = 15;
// console.log("value of c: ",c);


//block scope
// if(true){
//     var v = "this is for var";
//     let k = "this is for let";
//     const s =  "this is for const";
//     console.log(v);
//     console.log(k);
//     console.log(s);
  
// }
// console.log(v);//allowed
// console.log(k);//not allowed
// console.log(s);//not allowed

//function scope
// var k = 12;
// var s = 23;
// const p = 24;

// function test(){
//     var v ="this is for var";
//     let l = "this is for let";
//     const c = "this is for const";
//     console.log(k,s,p);
// }
// test();
//  console.log(v);//not allowed
//  console.log(l);//not allowed
//  console.log(c);//not allowed


//hoisting
console.log("hello",varHoist);
var varHoist = "hello js";// possiblw for var only

//datatypes
//premitive type
let num = 1223; //number
let text = "hii js"; //string
let isActive = true;  //boolean
let nothing = null //null
let notDefined ; //undefined
let n = 123456782345234n//bigint

//reference type
let arr = [1,2,3,4]//arr
let obj={
    name:"Khushi"
}

console.log(typeof(num), typeof(text), typeof(isActive));


//operators
//arithmetic operator
let a = 34;
let b = 45;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//assignment operators

a==5;
a =5;
a += 90;

//comparison operators

console.log(a>b, a==b, a<b, a===b, a>=b, a<=b);

//logical operators
console.log(a&&b, a||b, !a)

//unary operators
console.log(++a, --b)

//ternary operators
result = a>b ? "a is largest ":"a is smallest";
console.log(result); 



 
