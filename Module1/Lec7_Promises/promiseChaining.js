//Promise..

//Initial State is pending...
//Either the pending promise can be resolved or rejected...

//if pending promise is resolved => success callback is invoked..
//if pending promise is rejected => failure callback is invoked..

//scb can be attached to pending promise using then function
//fcb can be attached to pending promises using catch function

//then and catch can only be called on pending promises...

//then() and catch() functions are async functions!
//then and catch also returns a pending promise also known as thenkapromise




// let f1kaPromise = fs.promises.readFile("./f1.txt") ;
// f1kaPromise.then(function(data){
//     console.log(data + "") ;
// })
// .then(function(){
//     console.log("I ran after f1") ;
// })

const fs = require("fs") ;

let f1kaPromise = fs.promises.readFile("./f1.txt") ;

f1kaPromise.then(function(f1kaData){
    console.log(f1kaData + "") ;

    let f2kaPromise = fs.promises.readFile("./f2.txt") ;
    return f2kaPromise ;
})
.then(function(f2kaData){
    console.log(f2kaData + "") ;

    let f3kaPromise = fs.promises.readFile("./f3.txt") ;
    return f3kaPromise ;
})
.then(function(f3kaData){
    console.log(f3kaData + "") ;
})