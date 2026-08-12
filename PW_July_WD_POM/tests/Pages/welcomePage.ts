import { LoginPage } from "./loginPage";

export class WelcomePage extends LoginPage{

    async ClickonCRMSFA (){

        await this.page.locator('text=CRM/SFA').click()


    }

    async ClickonLogout(){

        await this.page.locator('[type="submit"]').click()

    }
}