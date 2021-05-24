const puppeteer = require("puppeteer") ;

const id = "jangwal006@gmail.com" ;
const pw = "PRANJAl@006" ;

let tab ;

//puppeteer has promisfied functions..
//by default headless = true 

let browserOpenPromise = puppeteer.launch({
     headless : false,
     defaultViewport : null ,
     args : ["--start-maximised"] ,
}) ;
// console.log(browserOpenPromise) ;
//Promise pending..

browserOpenPromise.then(function(browser){
    console.log("browser is opened !! ") ;
    return browser.pages() ;
})
.then(function(pages){
    tab = pages[0] ;
    return tab.goto("https://www.hackerrank.com/auth/login") ;
    
})
.then(function(){
    return tab.type("#input-1", id) ;
})
.then(function(){
    return tab.type("#input-2", pw) ;
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled") ;

})
.then(function(){
    console.log("logged in !!") ;
})