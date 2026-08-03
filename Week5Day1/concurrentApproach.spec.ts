import {test} from "@playwright/test"

test("Multiple window handling", async ({page,context}) => {

await page.goto('https://www.leafground.com/window.xhtml')

const[parentWindow]=await Promise.all([context.waitForEvent('page'),page.locator('//span[text()="Open Multiple"]').click()])
    
//parentWindow-> parent page, child 1 and child 2

const Allpages=parentWindow.context().pages()
//console.log(Allpages);


//property to find the length
const windowlength=Allpages.length
console.log(windowlength);

//title of pages
/* Window=0
Web Table=1
Dashboard=2 */

let webtable: any
let dashboard: any

for(let i=0;i<windowlength;i++){

    await page.waitForLoadState('domcontentloaded') //best practice
   // await page.waitForTimeout(5000) //hard waits are not recommended, as this will slow down the test execution

    const Title=await Allpages[i].title()
    console.log(Title);

    if(Title==="Web Table"){

    webtable=Allpages[i]
    await webtable.locator('//input[@placeholder="Search"]').fill('India')

   } else if(Title==="Dashboard "){

   dashboard=Allpages[i]

   await dashboard.locator('#message').fill("Window handling in Playwright")

   }

  }

  })