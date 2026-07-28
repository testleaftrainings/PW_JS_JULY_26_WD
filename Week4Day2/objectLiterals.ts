/* 
let user="Indira"
let id=3452
let isAutomation=true */

/* An Object Literal is the simplest way to create an object in TypeScript. It is a 
collection of key-value pairs enclosed within curly braces {} */

//implicit way of creating the object
//ex: let EmpDetails="Indira"

/* let EmpDetails={
 user:"Indira",
 id:3452,
 isAutomation:true

}

console.log(EmpDetails.isAutomation);//true
console.log(EmpDetails); 
//o/p

{ user: 'Indira', id: 3452, isAutomation: true } */


//explicit 
//ex: let username:string="Nandini"

let userDetails:{

"user($)":string
 id:number
 isAutomation:boolean
 "salary($)":number
}={
  
"user($)":"Nandini",
 id:1239,
 isAutomation:true,
"salary($)":200000
}

console.log(userDetails["user($)"]) //Nandini
console.log(userDetails);//{ user: 'Nandini', id: 1239, isAutomation: true }







