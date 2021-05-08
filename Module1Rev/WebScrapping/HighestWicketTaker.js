let matchLink = "https://www.espncricinfo.com/series/ipl-2019-1165643/chennai-super-kings-vs-mumbai-indians-final-1181768/full-scorecard" ;

const request = require("request") ;
const fs = require("fs") ;
const cheerio = require("cheerio") ;
//request is a hogh order funcion..

request(matchLink, cb) ;
function cb(error, response, data){
    // console.log("got the data") ;

    // fs.writeFileSync("./match.html", data) ;

    getHighestWicketTaker(data) ;
}

function getHighestWicketTaker(data){
    let myDocument = cheerio.load(data) ;
    let bothBowlingTables = myDocument(".table.bowler") ;

    //"0" : {bowling table} ,
    // "1" : {bowling table} 

    let highestWicketsTakenName ;
    let highestWicketsTaken ;
    let economyOfHighestWicketTaker ;
    let totalWide ;

    for(let i = 0; i < bothBowlingTables.length; i++){
        let bowlingTable = myDocument(bothBowlingTables[i]) ;
        let allTrs = bowlingTable.find("tbody tr") ;

        for(let j = 0; j < allTrs.length; j++){

            let allTds = myDocument(allTrs[j]).find("td") ;

            if(i == 0 && j == 0){
                highestWicketsTakenName = myDocument(allTds[0]).find("a").text() ;
                highestWicketsTaken = myDocument(allTds[4]).text() ;
                economyOfHighestWicketTaker = myDocument(allTds[5]).text() ;
                totalWide = myDocument(allTds[9]).text() ;

            }else{
                let currentWickets = myDocument(allTds[4]).text() ;
                let currentEconomy = myDocument(allTds[5]).text() ;

                if(currentWickets > highestWicketsTaken || currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker){
                    highestWicketsTakenName = myDocument(allTds[0]).text() ;
                    highestWicketsTaken = currentWickets ;
                    economyOfHighestWicketTaker = currentEconomy ;
                    totalWide = myDocument(allTds[9]).text() ;

                }
            }

        }
    }
    console.log("Name of the Highest Wicket taker: " + highestWicketsTakenName) ;
    console.log("Highest Wicket taken: " + highestWicketsTaken) ;
    console.log("min Economy of highest wicket taker: " + economyOfHighestWicketTaker) ;
    console.log("Total wides: " + totalWide) ;
}