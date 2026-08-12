import { WelcomePage } from "./welcomePage";

export class HomePage extends WelcomePage{

    async ClickonLeadsButton(){

    await this.page.locator('//a[text()="Leads"]').click()

    }

    async ClickonAccountsButton(){

    await this.page.locator('//a[text()="Contacts"]').click()


    }


}