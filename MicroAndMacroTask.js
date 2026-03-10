//js is a single threaded lang
//event loop - continously check for the task, and then run

//call stack
// - the place where js keep track of function executions
//push the task, run , pep

//Task queues
//they will be added to special type of queue

//macrotask queue - less priority task - big task
// setTimeOut
// IO events
//UI events - click scroll
//other async callbcks


//microtask queue - highh priority task - small task
//promises callback then, catch
//queuemicrotask()


console.log("JS")
setTimeout(()=>{
    console.log("JS1")
})
console.log("JS2")

console.log("customer order")
setTimeout(()=>{
    console.log("prepare pizza")//macrotask
})
Promise.resolve().then(()=>{
    console.log("add extra cheese")//microtask 
})
console.log("make payment to order")

//https://randomuser.me/api/

console.log("start")
setTimeout(()=>{
      console.log("done")
},2000)
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data=>{
    console.log("random user is: ",)
})
console.log("end") 