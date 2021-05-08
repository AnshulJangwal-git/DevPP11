//fs -> file System...

const fs = require("fs") ;

// console.log(fs) ;

let f1Data = fs.readFileSync("./f1.txt", "utf-8") ;

console.log(f1Data) ;
// console.log(f1Data + "" ) ; //utf-8 will not be required in this case...



// fs.writeFileSync("./index.txt", " Hello World !!!") ;

// fs.writeFileSync("index.html", "Hii Introduction to html") ;

fs.writeFileSync("../activity/activity.js", "faefmfoeg") ;






