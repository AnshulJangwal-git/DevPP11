//parallely read contents of f1 f2 and f3 using promisified functions...
const fs = require("fs") ;

let f1kaPromise = fs.promises.readFile("./f1.txt") ;
f1kaPromise.then(function(data){
    console.log(data + "") ;
})

let f2kaPromise = fs.promises.readFile("./f2.txt") ;
f2kaPromise.then(function(data){
    console.log(data + "") ;
})

let f3kaPromise = fs.promises.readFile("./f3.txt") ;
f3kaPromise.then(function(data){
    console.log(data + "") ;
})