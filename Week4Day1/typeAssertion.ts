
//typeAssertion- Type Assertion is a TypeScript feature that tells the compiler to treat a value
//  as a specific type without changing the actual value.

let apiresponse:any="success"
apiresponse=201


//type assertion using <> angular brackets
let response=<string>apiresponse


//type assertion using as string
let response1=apiresponse as string

//type assertion using !
let response2=apiresponse!

console.log(typeof response);
console.log(typeof response1);
console.log(typeof response2);

