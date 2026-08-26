import {test,devices} from "@playwright/test"

test.use({

    ...devices['Galaxy A55']
})
test('device emulation testing',async({page})=>{

await page.goto('https://www.amazon.in/')
await page.waitForTimeout(3000)

})