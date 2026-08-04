import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from "fs"
import path from "path"


// let value=fs.readFileSync('Data/sflogin.csv',"utf-8")
// console.log(value);


/* CSV ->data
tcid,username,password
tc001,dilipkumar.rajendran@testleaf.com,TestLeaf@2025
tc002,gauthami.vn@testleaf.com,TestLeaf@123 */


//relative path to read data from CSV file
let value:any[]=parse(fs.readFileSync('Data/sflogin.csv',"utf-8"),{skip_empty_lines:true,columns:true})
console.log(value);

//Absolute path to read data from csv file
//let value1:any[]=parse(fs.readFileSync(path.join(__dirname,'../../../Data/sflogin.csv')),{columns:true,skip_empty_lines:true})

/*
parsed object data:

[
  {
    tcid: 'tc001',
    username: 'dilipkumar.rajendran@testleaf.com',
    password: 'TestLeaf@2025'
  },
  {
    tcid: 'tc002',
    username: 'gauthami.vn@testleaf.com',
    password: 'TestLeaf@123'
  }
] */

//console.log(value[0].username)//dilipkumar.rajendran@testleaf.com
//console.log(value[0].password)//TestLeaf@2025

//for loop to iterate 2 set of data

for(let details of value){

test(`Learn to read data from csv file ${details.tcid}`,async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill(details.username)
await page.locator("#password").fill(details.password)
await page.locator('#Login').click()
    
})

}
