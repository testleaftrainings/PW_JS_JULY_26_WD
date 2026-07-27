"use strict";
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
//any - it accepts any kind of DT
let employee = "rekha";
employee = 123;
employee = true;
console.log(employee); //true
//unknown
let data = "validuser";
data = 1234;
if (typeof data === "number") {
    console.log(data + 45);
}
//never
function error() {
    throw new Error('Some thing went wrong');
}
