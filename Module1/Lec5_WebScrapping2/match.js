const request = require("request") ;
const cheerio = require("cheerio") ;
const fs = require("fs") ;

// let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-sunrisers-hyderabad-qualifier-2-1237180/full-scorecard" ;

function getMatchDetails(matchLink){
    request(matchLink, function(error, response, data){
        processData(data) ;
    })
}


function processData(html){
    let myDocument = cheerio.load(html) ;
    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible") ;


for(let i = 0; i < bothInnings.length; i++){
        let oneInning = myDocument(bothInnings[i]) ;
        //<div class = "Collapsible"></div> 
        let teamName = oneInning.find("h5").text() ;
        teamName = teamName.split("INNINGS")[0].trim() ;

        console.log(teamName) ;

        let allTrs = oneInning.find(".table.batsman tbody tr") ;
        for(let j = 0; j < allTrs.length - 1; j++){
            let allTds = myDocument(allTrs[j]).find("td") ;
            if(allTds.length > 1){
                //batsmanName allTds[0] 
                //runs allTds[2]
                //Balls played allTds[3]
                //fours allTds[5]
                //sixes allTds[6]
                //strikeRate allTds[7]

                let batsmanName = myDocument(allTds[0]).text().trim() ;

                let runs = myDocument(allTds[2]).text().trim() ;

                let balls = myDocument(allTds[3]).text().trim() ;

                let fours = myDocument(allTds[5]).text().trim() ;

                let sixes = myDocument(allTds[6]).text().trim() ;

                let strikeRate = myDocument(allTds[7]).text().trim() ;

                // console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} fours = ${fours} Sixes = ${sixes} strikeRate = ${strikeRate}`) ;
                processDetails(teamName, batsmanName,runs ,balls, fours , sixes, strikeRate) ;
            }
        }
       
    }
    console.log("#######################################") ;

}

function checkTeamFolder(teamName){
    // teamFolderPath = "./IPL/Delhi Capitals"
    let teamFolderPath = `./IPL/${teamName}`;
    return fs.existsSync(teamFolderPath);
}

function checkBatsmanFile(teamName, batsmanName){
    // "./IPL/Delhi Capitals/Rishabh pant.json"
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    return fs.existsSync(batsmanFilePath);
}

function updateBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    let batsmanFile = JSON.parse(fs.readFileSync(batsmanFilePath));
    let inning = {
        Runs : runs , 
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes ,
        StrikeRate : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync( batsmanFilePath , JSON.stringify(batsmanFile) );
}
function createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate){
    let batsmanFilePath = `./IPL/${teamName}/${batsmanName}.json`;
    let batsmanFile = [];
    let inning = {
        Runs : runs , 
        Balls : balls , 
        Fours : fours , 
        Sixes : sixes ,
        StrikeRate : strikeRate
    }
    batsmanFile.push(inning);
    fs.writeFileSync( batsmanFilePath , JSON.stringify(batsmanFile) );
}

function createTeamFolder(teamName){
    let teamFolderPath = `./IPL/${teamName}`;
    fs.mkdirSync(teamFolderPath);
}



function processDetails(teamName, batsmanName, runs, balls, fours, sixes, strikeRate ) {
    let isTeamFolder = checkTeamFolder(teamName) ;
    if(isTeamFolder){
        let isBatsmanPresent = checkBatsmanFile(teamName, batsmanName) ;
        if(isBatsmanPresent){
            updateBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate) ;
        }else{
            createBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate ) ;
        }

    }else{
        createTeamFolder(teamName) ;
        createBatsmanFile(teamName, batsmanName, runs, balls, fours, sixes, strikeRate ) ;

    }
}

module.exports = getMatchDetails ;
