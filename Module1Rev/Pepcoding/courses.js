let link = "https://www.pepcoding.com/#" ;

const cheerio = require("cheerio") ;
const request = require("request") ;

request(link, function(res, err, data){
    processData(data) ;
})

function processData(html){
    let myDocument = cheerio.load(html) ;

    let allCourses = myDocument(".card-content.center") ;

    for(let i = 0; i < allCourses.length; i++){
        let oneCourse = allCourses[i] ;

        let courseName = myDocument(allCourses[i]).find("h2").text() ;

        // console.log(courseName) ;

        
    }
}