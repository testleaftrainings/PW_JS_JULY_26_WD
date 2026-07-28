/* type Intersection-> A Type Intersection in TypeScript is a way to combine multiple types into a 
single type. It is represented using the & (ampersand) operator and The resulting type must 
satisfy all the combined types */


type credentials1={
    username:string
    password:string
}

type browserConfig1={
    browser:string
    headless:boolean
}

type testConfig1= credentials1 & browserConfig1

const config1:testConfig1={
username:"Tester",
password:"Welcome@123",
browser:"Chromium",
headless:true
}

console.log(config1.browser); //Chromium
console.log(config1);
/* {
  username: 'Tester',
  password: 'Welcome@123',
  browser: 'Chromium',
  headless: true
} */



