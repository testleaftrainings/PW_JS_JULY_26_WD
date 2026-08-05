import {test} from "@playwright/test"

import dotenv from "dotenv"

//process.env => node js object to read environment variables


//read the system environment variables
//console.log(process.env)

//reading single env file 
//dotenv.config({path:'Data/qa.env'})

//console.log(process.env.username)// admin
//console.log(process.env.LF_username)// democsr

//read multiple data
let filename=process.env.envfile || "qa" || "prod"
dotenv.config({path:`Data/${filename}.env`})

test('Learn to read data from env file', async ({page}) => {

await page.goto(process.env.LF_url as string)
//await page.goto(<string>process.env.LF_url)
//await page.goto(process.env.LF_url!)
await page.locator('#username').fill(process.env.LF_username as string)
await page.locator('#password').fill(process.env.LF_password as string)
await page.locator('.decorativeSubmit').click()
    
})