import {test,expect} from "@playwright/test"
import path from "path"

/* test("File Upload with <input type=file>",async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

//directly you can inject the file
//await page.locator('(//input[@type="file"])[1]').setInputFiles('Data/TestLeaf Logo.png')


//store the refernce and upload
const fupload=page.locator('(//input[@type="file"])[1]')
await fupload.setInputFiles('Data/TestLeaf Logo.png')
    
}) */


test("file upload using Event listener",async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/upload')

//create the event listener and promise

const upload=page.waitForEvent('filechooser')

//click action

await page.locator('//div[@id="drag-drop-upload"]').click()

//resolve the promise and store the reference

const fileuploadref= await upload

//upload the file

//relative path
//await fileuploadref.setFiles('Data/Qeagle.png')  

//Absolute path

await fileuploadref.setFiles(path.join(__dirname,'../../../Data/Qeagle.png'))
console.log(__dirname);

//store the innertext, print and verify it
const uploadverify=await page.locator('//span[text()="Qeagle.png"]').innerText()
console.log(uploadverify);

//Non retry assertion
expect(uploadverify).toBe("Qeagle.png")

//retry assertion
await expect(page.locator('//span[text()="Qeagle.png"]')).toContainText("Qeagle")

})


