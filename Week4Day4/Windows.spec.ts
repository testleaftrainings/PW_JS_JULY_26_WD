import {test} from "@playwright/test"

test('window handling',async ({page,context}) => {

await page.goto('https://www.amazon.in/')

const searchBox=page.locator('//input[@id="twotabsearchtextbox"]')

await searchBox.fill('iphone')

await searchBox.press('Enter')

//create the event listener and promise is created

const pwin=context.waitForEvent('page')

//triggered the event

await page.locator('(//span[contains(text(),"iPhone 17 256 GB")])[1]').click()

//resolve the promise and capture the event (child page)

const childWindow= await pwin

//child page title

const childTitle=await childWindow.title()
console.log(childTitle);

//parent page title

const parentTitle=await page.title()
console.log(parentTitle)

//brings the page to the front
await page.bringToFront()
await page.locator('(//a[text()="Bestsellers"])[1]').click()


    
})