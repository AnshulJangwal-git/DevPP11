let topLeftcell = document.querySelector(".top-left-cell") ;
let topRow = document.querySelector(".top-row") ;
let leftCol = document.querySelector(".left-col") ;


cellsContainer.addEventListener("scroll", function(e){
    let topOffSet = e.target.scrollTop ;
    let leftOffSet = e.target.scrollLeft ;

    topRow.style.top = topOffSet + "px" ;
    topLeftcell.style.top = topOffSet + "px" ;
    topLeftcell.style.left = leftOffSet + "px" ;
    leftCol.style.left = leftOffSet + "px" ;

}) ;

let allCells = document.querySelectorAll(".cell") ;

for(let i = 0; i < allCells.length; i++){
    allCells[i].addEventListener("blur", function(e){
        // console.log(e) ;

        //To save the values in db..
        let cellValueFromUI = e.target.textContent ;
        let rowId = e.target.getAttribute("rowid") ;
        let colId = e.target.getAttribute("colid") ;

        let cellObject = db[rowId][colId] ;
        cellObject.value = cellValueFromUI ;


    })
}
