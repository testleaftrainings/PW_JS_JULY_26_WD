import {test,expect} from "@playwright/test"

test('file download using event listener', async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

//create listener and promise

const filedownload=page.waitForEvent('download')

//trigger the click action

await page.locator("//span[text()='Download']").click()

//resolve the promise and store the reference

const fdown= await filedownload

//download the file and save it using custom filename

await fdown.saveAs('Data/test.png')

//download the file and save it using suggested filename

await fdown.saveAs(fdown.suggestedFilename())

//verify the file downloaded
expect(fdown.suggestedFilename()).toBe('TestLeaf Logo.png')

//Non-retry assertion
expect(fdown.suggestedFilename()).toContain('TestLeaf')

    
})