const puppeteer = require("puppeteer") ;


let ytLinks = require("./ytLinks") ;

(async function downloader(){
try{

    let browser = await puppeteer.launch({
        headless : false ,
        defaultViewport : null,
        args : ["--start maximised"] ,
        slowMo : 30
    });

    let pages = await browser.pages() ;
    let tab = pages[0] ;

    const videoDownloaderLink = "https://en.savefrom.net/1-youtube-video-downloader-5/";

    await tab.goto(videoDownloaderLink) ;

    await tab.waitForTimeout(2000) ;
    // await tab.type(".tarea-wrap input", "https://youtu.be/n1PCW0C1aiM") ;

    

    for(let i = 0; i < ytLinks.length; i++){
        await addSongsLinks(browser, videoDownloaderLink, ytLinks[i]) ;
    }

    


}catch(error){
    console.log(error) ;
}
})();

async function addSongsLinks(browser,videoDownloaderLink ,ytLink){
    try{
        let newTab = await browser.newPage() ;

        await newTab.goto(videoDownloaderLink) ;

        let songLink = ytLink["slink"] ;

        await newTab.waitForTimeout(2000) ;

        await newTab.type(".tarea-wrap input", songLink) ;

        await newTab.waitForSelector(".r-box button", {visible : true}) ;
        await newTab.click(".r-box button") ;

        await newTab.waitForTimeout(2000) ;

        await newTab.click(".def-btn-box a") ;
        await newTab.close() ;


    }catch(error){
        console.log(error) ;
    }
}
