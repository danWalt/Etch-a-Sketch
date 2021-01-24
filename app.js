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
let gridItems = document.querySelectorAll(".grid-item")

window.addEventListener('mouseover', () => {
    gridItems.forEach(block => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        block.addEventListener('mouseover',() => {
            block.style.backgroundColor = "#" + randomColor;
            })
        })
    })


resetButton.addEventListener('click', () => {
    let gridSize = prompt('How many squares should build the grid?')
    while (gridSize > 100 || gridSize < 1) {
        gridSize = prompt('Please enter a number between 1 and 100')
    }
    gridItems.forEach(block => {
        block.remove()
    })
    

    makeGrid(gridSize)
    gridItems = document.querySelectorAll(".grid-item")
    
})
    
function makeGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let index = 0; index < size*size; index++) {
        let block = document.createElement('div')
        let blockSize = (576/size) - 1
        block.style.width = blockSize +'px';
        block.style.height = blockSize +'px';
        container.appendChild(block).className = "grid-item";      
    }
}
})()