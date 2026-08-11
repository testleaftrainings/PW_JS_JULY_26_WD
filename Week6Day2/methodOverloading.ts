
class Browse{

loadApplication(url:string,browserName:string):void
loadApplication(url:string):void

//only method single implementation allowed in TypeScript

/* loadApplication(url:string){

} */

loadApplication(url:string,browserName?:string){

 if(browserName)   {

    console.log("The browser name is ",browserName);
    
 } else{

    console.log("Launch the url", url);
    
 }

}

}

let br=new Browse()
br.loadApplication("www.testleaf.com")
br.loadApplication("www.testleaf.com","Chrome")
