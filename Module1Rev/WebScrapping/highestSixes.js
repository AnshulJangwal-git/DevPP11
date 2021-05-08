let matchLink = "https://www.espncricinfo.com/series/ipl-2019-1165643/chennai-super-kings-vs-mumbai-indians-final-1181768/full-scorecard" ;

const request = require("request") ;
const fs = require("fs") ;
const cheerio = require("cheerio") ;


request(matchLink, cb) ;
function cb(error, response, data){
    // console.log("got the data!!") ;
    // fs.writeFileSync("./sixes.html", data) ;

    getHighestSixer(data) ;

}

function getHighestSixer(data){
    let myDocument = cheerio.load(data) ;
    let bothBattingTables = myDocument(".table.batsman") ;

    let highestSixerName ;
    let highestSixes ;
    let strikeRate ;

    for(let i = 0; i < bothBattingTables.length; i++){
        let battingTable = myDocument(bothBattingTables[i]) ;
        let allTrs = battingTable.find("tbody tr") ;

        for(let j = 0; j < allTrs.length ; j++){
            let allTds = myDocument(allTrs[j]).find("td") ;

            if(i == 0 && j == 0){
                highestSixerName = myDocument(allTds[0]).text() ;
                highestSixes = myDocument(allTds[6]).text() ;
                strikeRate = myDocument(allTds[7]).text() ;

            }else{
                let currentSixes = myDocument(allTds[6]).text() ;
                let currentStrikeRate = myDocument(allTds[7]).text() ;

                if(currentSixes > highestSixes || currentSixes == highestSixes && currentStrikeRate > strikeRate){
                    highestSixerName = myDocument(allTds[0]).text() ;
                    highestSixes = currentSixes ;
                    strikeRate = currentStrikeRate ;
                }
            }
        }
    }
    console.log("Batsman who hit the highest sixes: " + highestSixerName) ;
    console.log("Highest sixes hitted: " + highestSixes) ;
    console.log("Strike rate of the highestSixer: " + strikeRate) ;
}