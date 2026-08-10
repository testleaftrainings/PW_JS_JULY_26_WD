import { grandParent } from "./grandparent";

 export class parent1 extends grandParent {

    loadUrl(){
        console.log("load the url");
        
    }

    loginInfo(){

        console.log("Enter the login details");
        
    }
}

