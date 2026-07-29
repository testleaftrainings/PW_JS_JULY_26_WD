import {test} from "@playwright/test"

test("Learn alerts", async ({page}) => {

await page.goto("https://leafground.com/alert.xhtml")


//page.on->Handles all the alerts in the page
//page.once-> Handles only the first occuring alert 


page.on('dialog',async(alert)=>{
let alertType=alert.type()
console.log(alertType);

let alertMessage=alert.message()
console.log(alertMessage);

if(alertType==="confirm"){
await alert.accept()
}else {
await alert.dismiss()
}

})

await page.locator('(//span[text()="Show"])[1]').click()
await page.locator('(//span[text()="Show"])[2]').click()
await page.locator('(//span[text()="Show"])[5]').click()

})