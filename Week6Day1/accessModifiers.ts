
export class EmployeeSignup{


    //properties
    public eName:string="Hari"
    public eId:number=1234
    private readonly eSalary:number=50000 //accessible only inside the class
    protected ePhno:number=7689034567

    //static properties and method can be accessed using class name
    
    static email:string="example@gmail.com"

    static drive(){

        console.log("this is a static method");
        
    }

    //method-By default it is public AccessModifier

    printDetails(){

        console.log(`the employee details are ${this.eName}:${this.eId}:${this.ePhno}:${this.eSalary}`);
        
    }
 
    //get is used the read the data outside the class

    public get readData(){
        return this.eSalary
    }

    //set is used to modify or update the data outside the class

    //public set writeData(sal:number){
    //console.log(this.eSalary=sal);
    


    // }



//console.log(new EmployeeSignup())
// EmployeeSignup {
//   eName: 'Hari',
//   eId: 1234,
//   eSalary: 50000,
//   ePhno: 7689034567
// }

// let em=new EmployeeSignup()
// em.printDetails() //the employee details are Hari:1234:7689034567:50000
// console.log(em.eName) //Hari
// console.log(em.eId) //1234
// console.log(em.readData);//50000
// em.writeData=90000
// console.log(em.readData)//90000
}


//static methods and property
console.log(EmployeeSignup.email)  //example@gmail.com
EmployeeSignup.drive() //this is a static method
