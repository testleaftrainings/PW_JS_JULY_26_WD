//type Alias-> Type Alias is a TypeScript feature that lets you give a custom name to an 
// existing type, making your code reusable and easier to read.

//type union(|)-> Allows a variable to hold one of multiple specified types

//type intersection(&)->Combines multiple types into one, requiring all properties from every type.


//union type using let keyword

/* let login:string|number

login="testleaf@123"
login=76543
console.log(login); //76543

//union type using type keyword

type customdatatype= string| number|boolean

let loginID:customdatatype //let loginID:ID="demoscr"
loginID="demosalesmanager"
loginID=12345
loginID=true
//loginID=undefined //not allowed.
console.log(loginID) //true

 */


//typeunion-> to restrict the browser access

type supportedBrowser="chrome"|"firefox"|"msedge"

function invokeBrowser(browserName:supportedBrowser){

if(browserName==="chrome"){

    console.log("launch client specific browser",browserName);
    
} else{

    console.log("invalid browser");
    
}

}
invokeBrowser("chrome") //launch client specific browser chrome

invokeBrowser("firefox") //invalid browser

//invokeBrowser("opera") //error-> Argument of type "opera" is not assignable to parameter of type 'supportedBrowser'








