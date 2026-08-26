import {test} from "@playwright/test"

test.use({

    geolocation:{latitude:40.6971914,
        longitude:-73.979506
     },

    permissions:['geolocation']


})


test(' verify the location based on latitude and longitude', async({page})=>{

await page.goto('https://www.google.com/maps/')

await page.locator('.L6Bbsd').first().click()
await page.waitForTimeout(3000)


})