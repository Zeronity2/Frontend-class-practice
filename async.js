
//async and await
//async keyword that is used before the function
//it always return a promises
//await - waiting for response

function checkLogin(username, password){
    return new Promise((resolve, reject) => {
        console.log("checking for credentials")
        setTimeout(() =>{
           if(username==="Khushi" && password==="12345"){
            resolve("Login successfull ! ")
           }
           else{
            reject("Login rejected !")
           }
        },2000)
    })

}



//async function to handle login process

async function login() {
    try{
        //it will pause the function until promises is finishes
        const result = await checkLogin("Khushi","12345")
        //print the result
        console.log(result)
 
    }catch(error){
       console.log(error)
    }
}
 
login()


//hospital appointment
function bookingAppointment(IsDoctorAvailable){
        return new Promise((resolve, reject) => {
            console.log("checking for appointment !")
            setTimeout(() =>{
                    if(IsDoctorAvailable){
                         resolve("Doctor is available")
                    }
                    else{
                        reject("Doctor is not available")
                    }
            },2000)
        })
}



async function booking(){
    try{
        const result = await bookingAppointment(true)
        console.log(result)

    }catch(error){
        console.log(error)
    }
}
booking()

