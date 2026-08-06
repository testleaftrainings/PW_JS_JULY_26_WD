class Browser{

    //property-> stores the value

    browserName:string="chrome"
    browserVersion:number

    //methods-> for actionables

    launchBrowser(){
        console.log("Launch chrome browser")
        console.log(this.browserVersion)
        
        
    }

    loadUrl(){
        console.log("Loading the URL");
       // this.browserName
    }

    //default constructor
    // constructor(){
    //     console.log("default constructor");
        
    // }

    //parameterized constructor
    constructor(Version:number){
        console.log(this.browserVersion=Version);
        
    }

}

let browse=new Browser(123)
// console.log(browse.browserName)//chrome
// console.log(browse.browserVersion)//160
// browse.launchBrowser() //Launch chrome browser
// browse.loadUrl()//Loading the URL


