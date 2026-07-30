import {test,expect} from "@playwright/test"

test("frame handling using page.frame",async ({page}) => {


await page.goto('https://www.leafground.com/frame.xhtml')

//direct interaction with the single frame 
//await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator('#Click').click()

//storing as a reference for single frame interaction

const frameRef=page.frame({url:"https://www.leafground.com/default.xhtml"})

await frameRef?.locator('#Click').click()


//nested frame interaction

const nestedRef=page.frame({name:"frame2"})

//text before click action
const beforeclick=await nestedRef?.locator('#Click').innerText()
console.log(beforeclick);

//non-retry assertion
expect(beforeclick).toBe('Click Me')

//retry assertion
await expect(nestedRef!.locator('#Click')).toContainText('Click Me')

//click action
await nestedRef?.locator('#Click').click()

//text after click action
const afterclick=await nestedRef?.locator('#Click').innerText()
console.log(afterclick);

//non-retry assertion
expect(afterclick).toBe('Hurray! You Clicked Me.')

//retry assertion
await expect(nestedRef!.locator('#Click')).toContainText('Hurray! You Clicked Me.')

    
})