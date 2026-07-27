/* A function in TypeScript is a reusable block of code used to perform a specific task. 
TypeScript allows us to define the data types of parameters and the return value, which provides 
type safety and helps catch errors during compilation. */


function add(a:number,b:string):string{

    let c=a+b
    console.log(c);
    return c
    

}

add(12,"54") //66
console.log(add(30,"20"));//50
