import { CreateLead } from "./createLead"
import {expect} from "@playwright/test"


export class VerifyLead extends CreateLead{

    async VerifyFirstName(){

        const firstName=await this.page.locator('#viewLead_firstName_sp').innerText()
        console.log(firstName);
    
        //non-retry assertion
        expect (firstName).toBe('Joseph')

        //retry assertion
        //verify the partial match using contains
     await expect(this.page.locator('#viewLead_firstName_sp')).toContainText('Jose')

    
       //verify using exact match
     await expect(this.page.locator('#viewLead_firstName_sp')).toHaveText('Joseph')

     console.log("Successfully created Lead using Page Object Model");
     

    }
}