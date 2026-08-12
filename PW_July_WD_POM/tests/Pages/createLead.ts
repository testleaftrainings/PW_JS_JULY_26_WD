import { LeadPage } from "./leadPage";

export class CreateLead extends LeadPage{

 async EnterManditorydata(){

  await this.page.locator('#createLeadForm_companyName').fill("Qeagle")
  await this.page.locator('#createLeadForm_firstName').fill('Joseph')
  await this.page.locator('#createLeadForm_lastName').fill('Vijay')
 }

 async ClickonCreateLeadSubmitButton(){

 await this.page.locator('.smallSubmit').click()

 }

}

