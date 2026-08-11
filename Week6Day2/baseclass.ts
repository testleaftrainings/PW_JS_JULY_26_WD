import { RBI } from "./interface";

abstract class Basebank implements RBI{

    openAccount(){
        console.log("Know your customer details");
         
    }

    withdrawmoney(){
        console.log("transaction audits");
         
    }

    abstract rateofinterest():number;

    
}

class sbi extends Basebank{

rateofinterest(): number {
    return 7.2
    
}

}

let sb=new sbi()
sb.openAccount()
sb.withdrawmoney()
console.log(sb.rateofinterest())