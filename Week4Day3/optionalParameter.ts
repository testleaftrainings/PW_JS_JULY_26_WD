/* Optional parameter(?:): A parameter that can be omitted when calling a function, and if not 
provided,its value is undefined (unless a default value is specified). */


function login(userName:string,password?:string,islogged?:boolean){

if(userName && password){

    console.log("login is successful")
    
}else{
 console.log("Password is required")
}
}

login("testleaf","true",false)
login("testleaf","Welcome@1",true)
