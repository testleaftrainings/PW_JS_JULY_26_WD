/* number
string
boolean
undefined
null
bigInt
//In addition to JS , we have below typescript datatypes
any
unknown
never
tuple */


//any - it accepts any kind of DataType and Allows any operation without type checking

let employee:any="rekha"
employee=123
employee=true
console.log(employee)//true

//unknown-it accepts any kind of DataType and Requires type checking before performing any operation.

let data:unknown="validuser"
data=1234

if(typeof data==="number"){
console.log(data+45);
}

//never-A type that represents values that never occur, typically used for functions that never
//  return or always throw an error.

/* function error(): never{
    throw new Error('Some thing went wrong')

}

error() */

//tuple-A tuple is an array with a fixed number of elements, where each element can have a different
//  data type.

let array2:[string,boolean,number]=["Hello",true,314]
console.log(array2);
//array2[3]="playwright"
array2.push("playwright","Selenium")
console.log(array2);
//console.log(array2[3]);=> not allowed








