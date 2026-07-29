import {test} from "@playwright/test"

test("Learn Frames using index",async ({page}) => {

await page.goto('https://leafground.com/frame.xhtml')

const Allframes=page.frames() //method returns all the frames in the page
console.log(Allframes.length)  //mp-0,f1->1, f2->2, f3->3,f4->4  //total=5 frames

//to find the url of all the frames
for(let i=0;i<Allframes.length;i++){

    console.log(Allframes[i].url());
    
}
/* Url of 5 frames
https://leafground.com/frame.xhtml
https://leafground.com/default.xhtml
https://leafground.com/nested.xhtml
https://leafground.com/page.xhtml
https://leafground.com/framebutton.xhtml */



//handling the single frame using index

const frame1=Allframes[1]
await frame1.locator('#Click').click()

//handling the nested frame using index
const frame4=Allframes[4]
await frame4.locator('#Click').click()

await page.waitForTimeout(2000)
    
})