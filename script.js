const grid = document.querySelector('.grid');
const container = document.querySelector('.container');
const button = document.querySelector('.numOfSquares');
const gridElement = document.querySelectorAll('.grid-element');

let count = 0;
let count2 = 0;
let gridS = grid.style;
let gridItem = null;
let gridSize = 16;
let currentGrid = 0;
let rgbColor1;
let rgbColor2;
let rgbColor3;
let rbgColor = `rgb(${rgbColor1}, ${rgbColor2}, ${rgbColor3})`;
    
button.addEventListener('click', () => {
    if(currentGrid >= 1){
        removePrevGrid();
        gridSize = parseInt(prompt('How many Squares ?: '));
        if(gridSize > 30){
            while(gridSize > 30){
                alert('Pick a number under 30');
                gridSize = parseInt(prompt('How many Squares ?: '));
                if(gridSize <= 30){
                    createGrid(count2);
                    count2 = 0;
                    gridStyles();
                    currentGrid++;
                    console.log(gridSize);
                }
            }
        } else {
            createGrid(count2);
            count2 = 0;
            gridStyles();
            currentGrid++;
            console.log(gridSize);
        }
    }
});

function createGrid(count){
    while(count < (gridSize**2)){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-element');
        grid.appendChild(gridItem);
        gridItem.style.border = '1px solid grey';
        count++;
        const squares = document.querySelectorAll('.grid-element');
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `${rgbColorChange()}`;
            });
        });
    }
    currentGrid++;
}

createGrid(count);

function gridStyles(){
    gridS.border = '1px solid black';
    gridS.width = '500px';
    gridS.height = '500px';
    
    gridS.display = 'grid';
    gridS.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridS.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

gridStyles();

function removePrevGrid(){
    currentGrid = 0;
    if(grid.hasChildNodes() == true){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
    }
}

function rgbColorChange(){
    rgbColor1 = Math.random() * 255;
    rgbColor2 = Math.random() * 255;
    rgbColor3 = Math.random() * 255;
    rbgColor = `rgb(${rgbColor1}, ${rgbColor2}, ${rgbColor3})`;
    return rbgColor;
}