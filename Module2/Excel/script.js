let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");

let address = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let allCells = document.querySelectorAll(".cell");
let lastSelectedCell;

cellsContainer.addEventListener("scroll", function (e) {
    let topOffset = e.target.scrollTop;
    let leftOffset = e.target.scrollLeft;

    topRow.style.top = topOffset + "px";
    topLeftCell.style.top = topOffset + "px";
    topLeftCell.style.left = leftOffset + "px";
    leftCol.style.left = leftOffset + "px";
});

formulaInput.addEventListener("blur", function (e) {
    let formula = e.target.value;
    if (formula) {
        let calculatedValue = solveFormula(formula);
        // UI Update
        lastSelectedCell.textContent = calculatedValue;
        // DB Update
        let cellObject = getCellObjectFromElement(lastSelectedCell);
        cellObject.value = calculatedValue;
        cellObject.formula = formula;
    }
});

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function (e) {
        let cellObject = getCellObjectFromElement(e.target);
        address.value = cellObject.name ;
        formulaInput.value = cellObject.formula ;
    });

    allCells[i].addEventListener("blur", function (e) {
        // logic to save this value in db
        lastSelectedCell = e.target;

        let cellValueFromUI = e.target.textContent;
        // cellObject ki value update !!
        if (cellValueFromUI) {
            let cellObject = getCellObjectFromElement(e.target);
            cellObject.value = cellValueFromUI;

        }
    }) ;
}

function solveFormula(formula) {
    // tip : implement infix evalutaion
    // ( A1 + A2 ) => ( 10 + 20 );
    let formulaComps = formula.split(" ");
    // ["(" , "A1" , "+" , "A2" , ")"];
    // find valid component
    for (let i = 0; i < formulaComps.length; i++) {
        let fComp = formulaComps[i];
        if (
            (fComp[0] >= "A" && fComp[0] <= "Z") ||
            (fComp[0] >= "a" && fComp <= "z")
        ) {
            // A1 || A2
            // fComp = A1
            let cellObject = getCellObjectFromName(fComp);
            let value = cellObject.value;
            formula = formula.replace(fComp, value);
        }
    }
    // ( 10 + 20 ) => infix evaluation
    let calculatedValue = eval(formula);
    return calculatedValue;

}

function getCellObjectFromElement(element) {
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return db[rowId][colId];
}

function getCellObjectFromName(name) {
    // A100
    let colId = name.charCodeAt(0) - 65;
    let rowId = Number(name.substring(1)) - 1;
    return db[rowId][colId];
}

