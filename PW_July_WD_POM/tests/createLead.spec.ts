import {test} from "@playwright/test"
//import { LoginPage } from "./Pages/loginPage"

import {VerifyLead} from "./Pages/verifyLead"

test('Create lead using POM',async ({page}) => {


let vp=new VerifyLead(page)
await vp.loadUrl("https://leaftaps.com/opentaps/control/main")
await vp.enterCredentials("democsr2","crmsfa")
await vp.clickonLogin()
//await lp.closeBrowser() //by default page fixture will close the browser
await vp.ClickonCRMSFA()
await vp.ClickonLeadsButton()
await vp.ClickonCreateLeadButton()
await vp.EnterManditorydata()
await vp.ClickonCreateLeadSubmitButton()
await vp.VerifyFirstName()
    
})