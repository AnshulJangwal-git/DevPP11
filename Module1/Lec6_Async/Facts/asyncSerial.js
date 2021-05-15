// multiple files..
//async code..
// f1kadata => f2kadata => f3kadata

const fs = require("fs") ;

console.log("start") ;

fs.readFile("./f1.txt" , function(err , data){
    console.log(data+"");
    fs.readFile("./f2.txt" , function(err , data){
        console.log(data+"");
        fs.readFile("./f3.txt" , function(err , data){
            console.log(data+"");
        })
    })
})
console.log("end") ;

