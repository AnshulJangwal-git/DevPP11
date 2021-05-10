const request = require("request") ;
const cheerio = require("cheerio") ;

function getAllMatches(allMatchesLink){

    request(allMatchesLink, function(err, res, data){
        processData(data) ;
    })
}

function processData(html){
    let myDocument = cheerio.load(html) ;
    let allATags = myDocument('a[data-hover="Scorecard"]') ;

    console.log(allATags.length) ;
    
    for(let i=0 ; i<allATags.length ; i++){
        let matchLink =  "https://www.espncricinfo.com" + myDocument(allATags[i]).attr("href");
        console.log(matchLink);
    }   
}
module.exports = getAllMatches ;
