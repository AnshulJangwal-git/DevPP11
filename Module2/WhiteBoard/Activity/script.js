let canvas = document.querySelector("#canvas") ;

// a context object which provides fun for 2d drawing..
// let ctx = canvas.getContext("2d") ;

// ctx.fillStyle = "yellow" ;
// ctx.fillRect(10, 10, 150, 100);

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight - 100 ;


window.addEventListener("resize", function(e){
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight - 100 ;
});

// canvas drawing gets erased on window resizing..

let ctx = canvas.getContext("2d") ;
ctx.strokeStyle = "black"

let linesDB = [] ;
let isPenDown = false ;
let line = [] ;

canvas.addEventListener("mousedown", function(e){
    isPenDown = true ;
    let x = e.clientX ;
    let y = e.clientY-100;

    ctx.beginPath() ;
    ctx.moveTo(x, y) ;

    let pointObject = {
        x : x,
        y : y, 
        type : "md"
    }
    line.push(pointObject) ;
})

canvas.addEventListener("mousemove", function(e){
    
    if(isPenDown == true){
        let x = e.clientX ;
        let y = e.clientY-100;

        ctx.lineTo(x, y) ;
        ctx.stroke() ;

        let pointObject = {
            x : x,
            y : y, 
            type : "mm"
        }
        line.push(pointObject) ;
    }
   
})

canvas.addEventListener("mouseup", function(e){
    isPenDown = false ;
    console.log("Inside mouse up event") ;
    linesDB.push(line) ;
    line = [] ;
    console.log(linesDB) ;
})





