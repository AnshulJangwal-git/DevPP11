let matchLink = "https://www.espncricinfo.com/series/ipl-2019-1165643/chennai-super-kings-vs-mumbai-indians-final-1181768/full-scorecard" ;

const request = require("request") ;
const cheerio = require("cheerio") ;

request(matchLink, function(err, res, data){
    getHighestSixer(data) ;
})

function getHighestSixer(data){
    let myDocument = cheerio.load(data) ;

    let batsmanName ;
    let highestSixes ;
    let highestStrikeRate ;

    let bothBatsmanTable = myDocument(".table.batsman") ;
    
    for(let i = 0; i < bothBatsmanTable.length; i++){
        let batsmanTable = myDocument(bothBatsmanTable[i]) ;

        let allTrs = batsmanTable.find("tbody tr") ;
        
        for(let j = 0; j < allTrs.length; j++){
            let allTds = myDocument(allTrs[j]).find("td") ;

            if(allTds.length > 1){
                if(i == 0 && j == 0){
                    let batsmanName = myDocument(allTds[0]).text() ;
                    let highestSixes = myDocument(allTds[6]).text() ;
                    let highestStrikeRate = myDocument(allTds[7]).text() ;

                }else{
                    let currentSixes = myDocument(allTds[6]).text() ;
                    let currentStrikeRate = myDocument(allTds[7]).text() ;

                    if(currentSixes > highestSixes ||  (currentSixes == highestSixes && currentStrikeRate > highestStrikeRate)){
                        batsmanName = myDocument(allTds[0]).text() ;
                        highestSixes = currentSixes ;
                        highestStrikeRate = currentStrikeRate ;
                    }
                }
            }

        }
    }

    console.log("Batsman Name is : " + batsmanName) ;
    console.log("Highest Sixes are : " + highestSixes) ;
    console.log("Highest Strike Rate is : " + highestStrikeRate) ;
}