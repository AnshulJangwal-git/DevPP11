let matchLink = "https://www.espncricinfo.com/series/ipl-2019-1165643/chennai-super-kings-vs-mumbai-indians-final-1181768/full-scorecard" ;

const request = require("request") ;
const cheerio = require("cheerio") ;
const fs = require("fs") ;


request(matchLink, function(err, res, data){
    processData(data) ;
})

function processData(data){
    let myDocument = cheerio.load(data) ;

    let bothBowlingTables = myDocument(".table.bowler") ;

    let highestWicketTakerName ;
    let highestWicket ;
    let economyOfHighestWicketTaker ;

    for(let i = 0; i < bothBowlingTables.length; i++){
        let bowlingTable = myDocument(bothBowlingTables[i]) ;

        let allTrs = bowlingTable.find("tbody tr") ;

        for(let j = 0; j < allTrs.length; j++){
            let oneTr = myDocument(allTrs[j]) ;
            let allTds = oneTr.find("td") ;

            

           if(i == 0 && j == 0){
            highestWicketTakerName = myDocument(allTds[0]).find("a").text() ;
            highestWicket = myDocument(allTds[4]).text() ;
            economyOfHighestWicketTaker = myDocument(allTds[5]).text() ;
           }else{
               let currentWickets = myDocument(allTds[4]).text() ;
               let currentEconomy = myDocument(allTds[5]).text() ;

               if(currentWickets > highestWicket || currentWickets == highestWicket && currentEconomy < economyOfHighestWicketTaker){
                   //update the Highest wicket taker..
                   highestWicketTakerName = myDocument(allTds[0]).find("a").text() ;
                   highestWicket = currentWickets ;
                   economyOfHighestWicketTaker = currentEconomy ;
               }
           }
        }
    }
    console.log("Highest Wicket taker is : " + highestWicketTakerName) ;
    console.log("highestWicket are : " + highestWicket) ;
    console.log("Economy of the Highest Wicket taker : " + economyOfHighestWicketTaker) ;
}

