//fs -> file System...

const fs = require("fs") ;
// console.log(fs) ;

let f1Data = fs.readFileSync("./f1.txt", "utf-8") ;
console.log(f1Data) ;

fs.writeFileSync("./index.txt", " Hello World !!!") ;

fs.writeFileSync("index.html", "Hii Introduction to html") ;


