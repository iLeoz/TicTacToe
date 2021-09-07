// This piece of code selects all elements that contain "square" as a class and places them into a variable called "squares";
// Then performs a function each time one of the squares is clicked.
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click',handleClick);
    });
});

// This function is the function that runs when each square is clicked, and what it does is take the target of the click and then the id of that click.
function handleClick(event){
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){             // Execute the function and do an if at the same time.
        setTimeout(() => {
            alert("The Game Is Over - The Winner Was" + playerTime);
        },10);
    }
    
    updateSquare(position);                // Update the square's state.
}

// This is the function that updates the square's state..
// It takes the position and strings it to be able to get it by its id, then selects a position from the main array that
// it would be empty initially and put a symbol representing X or O, and finally put an innerHTML passing the symbol referring to the player's turn.
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}