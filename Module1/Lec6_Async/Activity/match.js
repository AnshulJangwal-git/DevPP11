const request = require("request") ;
const cheerio = require("cheerio") ;
const fs = require("fs") ;

// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard" ;


let countRequestSent = 0 ;

function getMatchDetails(matchLink){

    console.log("Send Request " + countRequestSent) ;
    countRequestSent ++ ;


//Async call
    request(matchLink, function(error, response, data){
        countRequestSent -- ;
        processData(data) ;

        console.log("callback ", countRequestSent) ;
        if(countRequestSent == 0){
            console.table(leaderBoard) ;
        }
    })
}
   let leaderBoard = [] ;


function processData(html){
    let myDocument = cheerio.load(html) ;

    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible");

    for(let i=0 ; i<bothInnings.length ; i++){
        let oneInning = myDocument(bothInnings[i]);
        // <div class="Collapsible"></div>
        let teamName = oneInning.find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        // console.log(teamName);

        let allTrs = oneInning.find(".table.batsman tbody tr") ;

        for(let j = 0; j < allTrs.length - 1; j++){
            let allTds = myDocument(allTrs[j]).find("td") ;

            if(allTds.length > 1){

                let batsmanName = myDocument(allTds[0]).text().trim() ;

                let runs = myDocument(allTds[2]).text().trim() ;

                let balls = myDocument(allTds[3]).text().trim() ;

                let fours = myDocument(allTds[5]).text().trim() ;

                let sixes = myDocument(allTds[6]).text().trim() ;

                let strikeRate = myDocument(allTds[7]).text().trim() ;

                //  console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} StrikeRate = ${strikeRate}`) ;

                // processDetail(teamName, batsmanName, runs, balls, fours, sixes, strikeRate ) ;

                LeaderboardProcess(teamName, batsmanName, runs, balls, fours, sixes) ;
            }
        }

    } 

}

function LeaderboardProcess(teamName, batsmanName, runs, balls, fours, sixes, strikeRate){

    runs = Number(runs) ;
    balls = Number(balls) ;
    fours = Number(fours) ;
    sixes = Number(sixes) ;

    for(let i = 0; i < leaderBoard.length; i++){
        let batsmanObject = leaderBoard[i] ;

        if(teamName == batsmanObject.team && batsmanName == batsmanObject.Batsman){
            batsmanObject.Runs += runs ;
            batsmanObject.Balls += balls ;
            batsmanObject.Fours += fours ;
            batsmanObject.Sixes += sixes ;
            return ;
        }
    }
    let batsmanObject = {
        Team : teamName ,
        Batsman : batsmanName ,
        Runs : runs ,
        balls : balls,
        Fours : fours ,
        Sixes : sixes 
    }
    leaderBoard.push(batsmanObject) ;

}




module.exports = getMatchDetails ;