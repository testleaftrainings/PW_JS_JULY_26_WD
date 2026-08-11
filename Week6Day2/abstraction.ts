
abstract class wrapperMethod{

    //implemented methods

    abstract bversion:number
    

    clickElement(){

    console.log("Launch the browser and load the url");
    

    }

    AlertPage(){

        console.log("handle all the alerts in the page");
        
    }

    

    //unimplemented methods

    abstract snap():void

    abstract video(): void
}

//object cannot be created for abstract class
// new wrapperMethod()


class Run extends wrapperMethod{

    snap(): void {
        console.log("Snap is created");
        
    }
    video(): void {
        console.log("video is recorded");
        
    }


    bversion:number=150


}

let ru=new Run()
ru.AlertPage()
console.log(ru.bversion)
ru.clickElement()
ru.snap()
ru.video()