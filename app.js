(() => {

const container = document.getElementById("container");
const h1 = document.createElement('h1')
h1.textContent = 'Etch-a-Sketch'
h1.className = 'headline'
container.parentElement.insertBefore(h1,container)
makeGrid(16)

const resetDiv = document.createElement('div')
resetDiv.className = 'reset-button-div'

const resetButton = document.createElement('button')
resetButton.textContent = 'Click Here to Reset'
resetButton.className = 'reset-button'
resetDiv.appendChild(resetButton)

document.body.insertBefore(resetDiv, document.body.firstChild);

  
function makeGrid(size){
    let gridArea = size * size;
    for (let index = 0; index < gridArea; index++) {
        let gridItem = document.createElement('div')
        gridItem.style.borderColor = 'gray'
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);      
    }

    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function colorGrid(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

resetButton.addEventListener('click', () => {
    let gridSize = prompt('How many squares should build the grid?')
    while (gridSize > 100 || gridSize < 1) {
        gridSize = prompt('Please enter a number between 1 and 100')
    }
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    
    makeGrid(gridSize)
})
  
})()

