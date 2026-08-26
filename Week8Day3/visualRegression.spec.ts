import {test, expect} from "@playwright/test"


test('visual regression testing', async({page})=>{

await page.goto('https://www.amazon.in/')
let snapshot=await page.screenshot({path:'a1.png'})

expect(snapshot).toMatchSnapshot("a1.png")


})

test.only('visual regression ', async({page})=>{

await page.goto('https://www.google.com/')
let snapshot=await page.screenshot({path:'a2.png'})

expect(snapshot).toMatchSnapshot("a2.png")


})
