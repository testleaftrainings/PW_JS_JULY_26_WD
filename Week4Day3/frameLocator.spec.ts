import {test, expect} from "@playwright/test"

test("Handle frames using frameLocator",async ({page}) => {

await page.goto('https://leafground.com/frame.xhtml')

const Allframes=page.frames() //method returns all the frames in the page
console.log(Allframes.length)

//Handle single frame using FrameLocator

//single line approach
//await page.frameLocator('[src="default.xhtml"]').locator('#Click').click()


//storing the locator as reference and handle the frame 
const frameref=page.frameLocator('[src="default.xhtml"]')

//find the innertext before click action
const beforeclick=await frameref.locator('#Click').innerText()
console.log(beforeclick); //click me

//non retry assertion
expect(beforeclick).toBe('Click Me')

//retry assertion
await expect(frameref.locator('#Click')).toContainText('Click Me')

//click the button present inside the frame
await frameref.locator('#Click').click()

//find the innertext after click action
const afterclick=await frameref.locator('#Click').innerText()
console.log(afterclick)//Hurray! You Clicked Me.

//non retry assertion
expect(afterclick).toBe('Hurray! You Clicked Me.')

//retry assertion
await expect(frameref.locator('#Click')).toContainText('Hurray! You Clicked Me.')

})