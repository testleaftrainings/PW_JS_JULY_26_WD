import { parent1 } from "./parent";

class child1 extends parent1{

    createAccount(){

        console.log("Account is created");
        
    }
}

let ch1=new child1()
ch1.createAccount()
ch1.loadUrl()
ch1.loginInfo()
ch1.launchBrowser()
