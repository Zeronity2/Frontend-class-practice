function checkLogin(username, password){
    return new Promise((resolve, reject) => {
        console.log("checking for credentials");
        setTimeout(() =>{
           if(username==="Khushi" && password==="12345"){
            resolve("Login successfull ! ");
           }
           else{
            reject("Login rejected !");
           }
        },2000);
    });

}

checkLogin("Khushi","12345")
.then(result => console.log(result))
.catch(error => console.log(error))


