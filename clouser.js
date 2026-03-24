//clouser = is a function that remember variables from its outside scope even the outer function has finished execution

function outerVar(){
    let outerVariable = "i am from outer"
    function innerFun(){
        console.log(outerVariable)
    }
    return innerFun
    //calling the outFun
    const res = outerVar()
    res();
}


function greet(name){
    return function(){
      console.log(`hello`+name)
    }
}
const greetUser = greet(Khushi)
greetUser()


function counter(){
    let count = 0
    return function(){
        count++
        console.log(count)
    }
}
const incre = counter()
incre()
incre()
incre()
incre() 