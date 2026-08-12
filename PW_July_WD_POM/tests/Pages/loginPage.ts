/* loadurl()
entercredentials
clickingonLoginButton() */

import {chromium,Page} from "@playwright/test"

export class LoginPage{

//global property
page:Page

constructor(temppage:Page){  //temppage is the page reference from the constructor parameterization
    this.page=temppage
}


async loadUrl(url:string){
await this.page.goto(url)

    }

async enterCredentials(username:string,password:string){

await this.page.locator('#username').fill(username)
await this.page.locator('#password').fill(password)

    }

async clickonLogin(){

await this.page.locator('.decorativeSubmit').click()

}

async closeBrowser(){

await this.page.close()
}


}

//browser instance 

// async function doLogin(){

// const browser=await chromium.launch({headless:false})
// const context=await browser.newContext()
// const page=await context.newPage()


// let lp=new LoginPage(page)
// await lp.loadUrl("https://leaftaps.com/opentaps/control/main")
// await lp.enterCredentials("democsr2","crmsfa")
// await lp.clickonLogin()
// await lp.closeBrowser()

// }

// doLogin()

