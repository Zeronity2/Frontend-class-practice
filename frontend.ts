//access the html elemnets
const heading = document.getElementById("heading") as HTMLHeadingElement
const button = document.getElementById("btn") as HTMLButtonElement
//define ts -or type
let msg:string = "hello students"
heading.textContent = msg
//event
button?.addEventListener("click",()=>{
    heading.textContent = "Button is clicked"
})

//run the ts file by - tcs filenaME
//it will be converted into js file
//then link js file to html file and run html file