var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
var correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var submitButton = document.querySelector("button[type='submit']");

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "images/puzzle/image_part_00" + imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
    initializeSubmitButtonState();

}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    // Add a check after the swap to see if the puzzle is solved
    checkPuzzleSolved();
}

function checkPuzzleSolved() {
    let tiles = document.querySelectorAll("#board img");
    let currentOrder = Array.from(tiles).map(tile => {
        let parts = tile.src.split("/"); // This splits the src by "/"
        let filename = parts.pop(); // Get the last part, which is the filename
        return filename.replace('image_part_00', '').split('.').shift(); // Remove the prefix and get the number
    });
    
    // Now compare currentOrder with correctOrder
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        // Puzzle is solved, enable the submit button
        submitButton.disabled = false;
    } else {
        // Puzzle is not solved, keep the submit button disabled
        submitButton.disabled = true;
    }
}

// Initial check in case the puzzle starts in a solved state
checkPuzzleSolved();
