let count = 0;

let gridSize = 0;
let squareSize = 0;

const grid = document.querySelector('.grid');

gridSize = 20;
squareSize = 35;

//try to take advantage of the grid to change the size and number of
// the squares in the grid
/**
 * when I change the slider's position it chnages the size of the squares
   in the grid. Use javascript to manipulate the css variables so that the
   size is changed by the slider.
 */

while(count < (gridSize * gridSize)){
    grid.style.display = 'grid';
    grid.style.justifyContent = 'center';
    grid.style.alignContent = 'center';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${25}px)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${25}px)`;
    grid.style.maxWidth = "50%";
    grid.style.maxHeight = "50%";
    const square = document.createElement('div');
    square.style.width = `${25}px`;
    square.style.height = `${25}px`;
    square.style.border = '1px solid black';
    square.style.maxWidth = '100%';
    square.classList.add('grid-item');
    grid.appendChild(square);
    count++;
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

