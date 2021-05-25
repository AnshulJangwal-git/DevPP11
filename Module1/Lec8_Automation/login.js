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
    return waitAndClick("#base-card-1-link"); // make this function a promisified function !!
  })
  .then(function(){
    return waitAndClick('a[data-attr1="warmup"]');
  })
  .then(function(){
    return tab.waitForSelector(".js-track-click.challenge-list-item",
     {visible : true}) ;
  })
  .then(function(){
    return tab.$$(".js-track-click.challenge-list-item") ;
  })
  .then(function(allQuesArray){
      let allPendingPromises = [] ;

    for(let i = 0; i < allQuesArray.length; i++){
      let oneAtag = allQuesArray[i] ;
      let pendingPromise = oneAtag.evaluate(function (element){return element.getAttribute("href");}, oneAtag) ;
      allPendingPromises.push(pendingPromise) ;
    }

    console.log(allPendingPromises) ;

    let allPromisesCombined = Promise.all(allPendingPromises) ;

    return allPromisesCombined ;
  })
  .then(function(allQuesLinks){
      console.log(allQuesLinks) ;
  })
  .catch(function(err){
    console.log(err);
  })
  

  function waitAndClick(selector){
    return new Promise( function(scb , fcb){
      let waitPromise = tab.waitForSelector( selector , { visible: true });
      waitPromise.then(function(){
         return tab.click(selector);
      })
      .then(function(){
        scb();
      })
      .catch(function(){
        fcb();
      })
    });
  }
