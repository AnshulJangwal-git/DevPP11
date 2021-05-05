//In Dev_PP11 folder
//npm init -y
//npm install cheerio



const fs = require("fs") ;
const cheerio = require("cheerio") ;

let htmlkaData = fs.readFileSync("./index.html", "utf8") ;

// console.log(htmlkaData) ;

let myDocument = cheerio.load(htmlkaData) ;
//document.querySelector("h1") ;

let h1kaData = myDocument("h2").text() ;
// console.log(h1Element) ;

// console.log(h1kaData) ;

//selectors..
// console.log(myDocument("ul p").text()) ;

//a tag
// console.log(myDocument("a").text()) ;

//To get all a tag inside li
// console.log(myDocument("ul li a").text()) ;

// //only Direct child..
// console.log(myDocument("ul>a").text()) ;


//classes...
//dot
// console.log(myDocument(".inside").text()) ;

// console.log(myDocument(".inside.main").text()) ;

//IDs =>
//# 
console.log(myDocument("#main-heading").text()) ;

