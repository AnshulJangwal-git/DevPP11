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

console.log(h1kaData) ;