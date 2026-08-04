import {test} from "@playwright/test"

import data from "../../../Data/leafTaps.json"

//console.log(data[0].Username)
//console.log(data[0].Password)

//describe.serial is run the test in serial mode one after the another

test.describe.serial('run the test in serial mode', async()=>{

//use for_of for iteration

for(let credentials of data){

test(`learn to read data from JSON file ${credentials.TCID}`,async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill(credentials.Username)
await page.locator('#password').fill(credentials.Password)
await page.locator('.decorativeSubmit').click()
    
})
}
})


/* 
//for loop with index

let arr=["apple","orange", "banana"]

for(let i=0;i<arr.length;i++){

    console.log(arr[i]); //"apple","orange", "banana"
    
}


//for_of loop to iterate and loop through the value with out index

for(let newarr of arr){
    console.log(newarr)
} */
