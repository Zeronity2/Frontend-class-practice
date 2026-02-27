//promises
//pending state
//fulfilled or success
//rejected

//create a promise
let foodOrder = new Promise((resolve, rejected)=>{
    let restaurantOpen = true
    if(restaurantOpen){
        resolve("Food delivered");
    }else{
        rejected("restaurant is closed");
    }

});

//handle the promise
foodOrder.then(result=>console.log(result))
.catch(error=>console.log(error))

function checkResult(marks){
    return new Promise((resolve, rejected)=>{
        console.log("checking result")
        setTimeout(()=>{
            if(marks>40){
                console.log("student passed!");
            }else{
                console.log("student failed!");
            }
        },2000);
        
    });
}

checkResult(80).then(message => console.log("message"))
.catch(error=>console.log("something went wrong"));

//https://jsonplaceholder.typicode.com/posts

function getData(){
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
}
getData()                             

//convert the response to json 
.then(function(response){
    if(!response.ok){
        throw new Error("Issue with api")
    }
    return response.json()
})

//get the data from api
.then(function(data){
    console.log("title is ",data.title)
    console.log("body is: ",data.body)
})
 