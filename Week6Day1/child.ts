
import { parent1 } from "./parent";

class child extends parent1{

    createLead(){

        console.log("lead is created");
        
    }
}

let ch=new child()
ch.loadUrl()
ch.loginInfo()
ch.createLead()
ch.launchBrowser()