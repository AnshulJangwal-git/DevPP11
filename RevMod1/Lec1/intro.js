// console.log("Hello World") ;

// let a = 10 ;
// console.log(a) ;

// if(true){
//     a = 20 ;
//     console.log(a) ;

// }
// console.log(a) ;

// const pi = 3.14 ;
// console.log(pi) ;

// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

// values.push("Captain America") ;

// values.push(5) ;
// console.log(values) ;

//shift -> delete an element from the starting of the array...
//unshift -> add an element from the starting of the array...

// console.log(values.shift()) ;
// values.unshift("Anshul Jangwal") ;

// console.log(values) ;


//objects -> key values pair...

// let a = 10 ;
// console.log(a) ;

// if(true){
//     // let a = 20 ;
//     let a = 15 ;
//     console.log(a) ;
// }
// console.log(a) ;

let obj = {
    Name : "Anshul Jangwal", 
    place : "Meerut", 
    movies : ["Captain America", "Winter Soldier", {
        
        bestie : "bucky",
        nickname : "Winter Soldier" , 
        partner : "falcon" ,
        weakness : ["brainwash"] 
    }]

}
console.log(obj.movies[2].weakness[0].substring(1, 5)) ;