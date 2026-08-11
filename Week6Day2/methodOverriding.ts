//method overriding

//parent class
class Baseclass{

    login(){

        console.log("login to the application");
        
    }
}

//child class
class Admin extends Baseclass{

login(){

        console.log("login with client credentials");//child method login is implemented through overrining
        super.login()                                //Immediate Parent method is called
    }

}

let ad=new Admin()
ad.login()
