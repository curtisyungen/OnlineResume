// Create 9 x 9 table filled with zeroes

var sudoku;
var row;

function getSudoku() {

    sudoku = [];

    for (var i = 0; i < 9; i++) {
        row = [];

        for (var j = 0; j < 9; j++) {
            row.push(0);
        }

        sudoku.push(row);
    }

    return sudoku;
}

var cell;
var boardVals = getSudoku();

function buildTable() {

    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {

            cell = $("<div>")
                .addClass("cell")
                .attr("data-row", row)
                .attr("data-col", col)
                .attr("data-rowSect", Math.floor(row / 3))
                .attr("data-colSect", Math.floor(col / 3))
                .attr("id", `${row}${col}`)
                .text(boardVals[row][col]);

            $("#sudoku").append(cell);
        }

        $("#sudoku").append("<br>");
    }
}

// Generate value for particular cell

var allowedVals;
var cellVal;
var val;
var idx;
var random;
var rowSect;
var colSect;
var getRowSect;
var getColSect;

function getCellVal(col, row) {

    allowedVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Check row
    for (var x = 0; x < 9; x++) {
        val = boardVals[row][x];
        idx = allowedVals.indexOf(val);

        if (idx > -1) {
            allowedVals.splice(idx, 1);
        }
    }

    // Check column
    for (var y = 0; y < 9; y++) {
        val = boardVals[y][col];
        idx = allowedVals.indexOf(val);

        if (idx > -1) {
            allowedVals.splice(idx, 1);
        }
    }

    // Check section
    rowSect = Math.floor(row / 3);
    colSect = Math.floor(col / 3);

    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            getRowSect = $(`#${r}${c}`)[0].dataset.rowsect;
            getColSect = $(`#${r}${c}`)[0].dataset.colsect;

            if (getRowSect == rowSect && getColSect == colSect) {
                val = boardVals[r][c];
                idx = allowedVals.indexOf(val);

                if (idx > -1) {
                    allowedVals.splice(idx, 1);
                }
            }
        }
    }

    // Backtrack
    if (allowedVals.length == 0) {
        
    }
    else {
        // Assign random value to cell
        random = Math.floor(Math.random() * allowedVals.length);

        cellVal = allowedVals[random];

        boardVals[row][col] = cellVal;
    }

    
}

function newGame() {
    
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            getCellVal(j, i);
        }
    }

    for (var i=0; i<9; i++) {
        for (var j=0; j<9; j++) {
            $(`#${i}${j}`).text(boardVals[i][j]);
        }
    }

    console.log(boardVals);
}

getSudoku();
buildTable();
newGame();






