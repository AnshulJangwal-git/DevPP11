console.log("Hello World") ;
//let Keyword..
let a = 10 ;
console.log(a) ;

if(true){
    let a = 20 ;
    console.log(a) ;
}
console.log(a) ;

let values = [1, 2, 3, 4, 5, , 6, 7, 8] ;
console.log(values) ;

//push -  Add element in the last of the Array...
values.push("Anshul Jangwal") ; //can push values of any DataType like boolean, String, int, float...
console.log(values) ;

values.pop() ;
console.log(values) ;

//push - Add at the end 
// pop - Remove from the end 

//shift - delete an element from the starting 
//unshift - add an element at the starting 


let obj = {
    name : "Anshul Jangwal",
    place : "Queens" ,
    movies : ["Captain America", "Winter Soldier", {
        bestie : "bucky", 
        nickname : "Winter Soldier", 
        partner : "Falcon", 
        weakness : ["brainwash"] 
    }] ,

}

//dot -> literal check 

console.log(obj.name) ;
console.log(obj.movies) ;


//Square Bracket Notation...
console.log(obj["place"]) ;

obj.skills = ["martial Arts", "boxing"] ;
obj.place = "New York" ;

console.log(values) ;

console.log(obj.movies[2].weakness[0][5]) ;

