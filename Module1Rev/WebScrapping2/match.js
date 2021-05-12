const cheerio = require("cheerio");
const request = require("request");
// const fs = require("fs");
// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


function getMatchDetails(matchLink){
    request(matchLink , function(error , response , data){
        processData(data);
    })
}


function processData(html){
    let myDocument = cheerio.load(html);
    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible");
    for(let i=0 ; i<bothInnings.length ; i++){
        let oneInning = myDocument(bothInnings[i]);
        // <div class="Collapsible"></div>
        let teamName = oneInning.find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        console.log(teamName);

    // for(let i = 0; i < bothInnings.length; i++){
    //     let oneInning = bothInnings[i] ;

    //     let allTrs = oneInning.find("tbody tr") ;
    // }

    }
}
module.exports = getMatchDetails ;