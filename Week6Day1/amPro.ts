import {EmployeeSignup} from "./accessModifiers"

class HR extends EmployeeSignup{

    empUpdate(){

        console.log(this.ePhno);
        
    }


}

let hr=new HR()
hr.empUpdate()

