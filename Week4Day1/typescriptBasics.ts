//Simple log in typescript

console.log("Typescript Learnings ");


//Inference-Inference is TypeScript's ability to automatically determine a variable's data 
// type without an explicit type annotation.

/* Implicit inference: TypeScript automatically determines the variable's type based on the 
assigned value. */

let userName="Kavitha"
//console.log(userName)
userName="1234"
console.log(userName);

//explict inference
/* The developer explicitly specifies the data type of a variable, parameter, or function return
 value. */

let lastName:string="Vidya"
console.log(lastName);

lastName="true"
console.log(lastName);



