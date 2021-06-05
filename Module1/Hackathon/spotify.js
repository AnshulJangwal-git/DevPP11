const puppeteer = require("puppeteer") ;

const id = "anshuljangwal@gmail.com" ;
const pw = "PRANJAl@006" ;

(async function login(){
try{
    let browser = await puppeteer.launch({
        headless : false ,
        defaultViewport : null ,
        args : ["--start maximised"] ,
        
    });
    let pages = await browser.pages() ;
    let tab = pages[0] ;
    
    await tab.goto("https://accounts.spotify.com/en/login/") ;
    

    await tab.type('input[ng-model="form.username"]', id) ;
    await tab.type('input[ng-model="form.password"]',pw) ;

    await tab.click(".btn.btn-block.btn-green.ng-binding") ;

    await tab.waitForSelector('a[ng-href="https://open.spotify.com"]', {visible : true}) ;
    await tab.click('a[ng-href="https://open.spotify.com"]') ;

    await tab.waitForTimeout(2000) ;

    // let createPlaylistElement = await tab.$('.a16324b4c3b900fe7e7c087e3f2a9e11-scss') ;
    // createPlaylistElement.click() ;

    await tab.click("._098f19e4e257ef05dd9cf335bd1573d0-scss span");
    


}catch(error){
    console.log(error) ;
}



})() ;