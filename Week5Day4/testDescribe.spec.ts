
import {test} from "@playwright/test"

test.describe('smoke testing',()=>{
test.describe.configure({mode:"default",retries:1})

test('Amazon', async({page})=>{
await page.goto('https://www.amazon.in/')

})

test('Flipkart', async({page})=>{
await page.goto('https//www.flipkart.com/')

})

test('snap deal', async({page})=>{

await page.goto('https://www.snapdeal.com/')

})


})