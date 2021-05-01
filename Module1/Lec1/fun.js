//function body 
function fun(){
    console.log("Function says hii !!") ;
}

//function call/ invoke 
fun() ;

// In js, a function acts like a variable...
let sayHi = function(){
    console.log("sayHi functions says hi! ") ;

}
sayHi() ;

function callBack(){
    console.log("I am passed as a argument ") ;
    return 5 ;
}

function HighOrderFunction(cb){
    let value = cb() ;
    console.log(value) ;
}

HighOrderFunction( callBack ) ;