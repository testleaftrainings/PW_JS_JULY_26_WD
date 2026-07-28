//enum-> enumeration (named constant)
/* An Enum (Enumeration) in TypeScript is a feature that lets you define a fixed set of named 
constant values. It makes your code more readable, maintainable, and less error-prone */

//numeric enum(default):A Numeric Enum is an enum where each member is assigned a numeric value. 
// By default, TypeScript starts numbering from 0 and increments by 1 for each subsequent member.

enum browserStatus{

open,
closed,
incognito
    
}
console.log(browserStatus);

/* {
  '0': 'open',
  '1': 'closed',
  '2': 'incognito',
  open: 0,
  closed: 1,
  incognito: 2
} */

//string enum-A String Enum is an enum where each member is assigned a string value instead of a
//  numeric value. Unlike numeric enums, TypeScript does not automatically assign values—you must
//  explicitly provide a string for each member

/* enum testResult{

    passed="test passed",
    failed="test failed",
    skipped="test skipped"
}

console.log(testResult.skipped) //test skipped
console.log(testResult) */

/* {
  passed: 'test passed',
  failed: 'test failed',
  skipped: 'test skipped'
} */


//heterogenous enum->A Heterogeneous Enum is an enum that contains both numeric and string values
//Although TypeScript supports heterogeneous enums, they are rarely used because they make the code
//  less consistent and harder to maintain.

enum testvalue{

    passed,
    add,
    failed="fail",
    skipped="skipped",
    retry=78,
    only
}

console.log(testvalue.only) 
console.log(testvalue)