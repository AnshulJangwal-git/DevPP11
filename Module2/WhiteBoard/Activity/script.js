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

let isPenDown = false ;

canvas.addEventListener("mousedown", function(e){
    isPenDown = true ;
    let x = e.clientX ;
    let y = e.clientY-100;

    ctx.beginPath() ;
    ctx.moveTo(x, y) ;
})

canvas.addEventListener("mousemove", function(e){
    
    if(isPenDown == true){
        let x = e.clientX ;
        let y = e.clientY-100;

        ctx.lineTo(x, y) ;
        ctx.stroke() ;
    }
})

canvas.addEventListener("mouseup", function(e){
    isPendown = false ;
})





