import {test,expect} from "@playwright/test"

// test('Amazon', async({page})=>{
// await page.goto('https://www.amazon.in/')

// })

// //this test alone will be executed-debugging
// // test.only('Flipkart', async({page})=>{
// // await page.goto('https://www.flipkart.com/')

// // })

// //intentionally skipping the test
// test.skip('google', async ({page}) => {
// await page.goto('https://www.google.com/')
    
// })

test.fail('leafTaps',async ({page}) => {
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill("democsr2")
await page.locator('#password').fill("crmsfa")
await page.locator('.decorativeSubmit').click()
expect(page.title()).toBe("leaftas.com")

    
 })

// test.fixme('snap deal', async({page})=>{

// await page.goto('https://www.snapdeal.com/')

// })

// test('test info',async () => {

// test.info().annotations.push({type: "test information",description:"meta data of the current test"},
// {type:"Author",description:"Aruna"}
// )
    
// })

test('sample test', async()=>{

test.slow() //increase the time out by trice
console.log("timeout:",test.info().timeout);


})