const puppeteer = require("puppeteer") ;

//puppeteer has promisfied functions..
//by default headless = true 

let browserOpenPromise = puppeteer.launch({ headless : false}) ;
console.log(browserOpenPromise) ;
//Promise pending..

browserOpenPromise.then(function(browser){
    console.log("browser is opened !! ") ;
    return browser.pages() ;
})
.then(function(pages){
    let tab = pages[0] ;
    return tab.goto("https://www.youtube.com") ;
    
})
.then(function(){
    console.log("On google homepage!! ") ;
    console.log("On youtube!! ") ;
})