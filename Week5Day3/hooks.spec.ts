import test from "@playwright/test"

import {parse} from "csv-parse/sync"
import fs from "fs"

let value:any[]

test.describe.serial('runs the test in serial mode',async () => {
    
//connectivity to read data from CSV file

test.beforeAll('database connectivity',async () => {
console.log("Runs before All");
value=parse(fs.readFileSync('Data/leaf.csv','utf-8'),{columns:true,skip_empty_lines:true}) 
})

//login functionality for each test

test.beforeEach('Login functionality for each test', async({page})=>{
console.log("Runs before each and every test");
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill(value[0].username)
await page.locator("#password").fill(value[0].password)
await page.locator('.decorativeSubmit').click()
await page.locator('text=CRM/SFA').click()
})

//test to create lead

test('create Lead',async({page})=>{
console.log("Create Lead module");
await page.locator('//a[text()="Leads"]').click()
})

//test to create Account

test('create Account',async({page})=>{
console.log("Create Account module");
await page.locator('//a[text()="Accounts"]').click()
})


//Print report status for each test

test.afterEach('Print the status of reports',async ({},testinfo) => {
console.log("Runs after each and every test")

console.log(testinfo.status)
console.log(testinfo.title);

})


//close the browser and DB connectivity

test.afterAll('close the connection',async()=>{
console.log("Runs afterAll")

})

   
})

