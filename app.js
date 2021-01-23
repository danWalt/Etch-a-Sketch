(() => {

const container = document.getElementById("container");
const h1 = document.createElement('h1')
h1.textContent = 'Etch-a-Sketch'
h1.className = 'headline'
container.parentElement.insertBefore(h1,container)

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let index = 0; index < rows*cols; index++) {
        let cell = document.createElement('div')
        cell.innerText = ''
        container.appendChild(cell).className = "grid-item";      
    }
}
makeRows(16, 16)



function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const gridItems = document.querySelectorAll(".grid-item")
window.addEventListener('mouseover', () => {
gridItems.forEach(block => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    block.addEventListener('mouseover',() => {
        block.style.backgroundColor = "#" + randomColor;
    })
})

})
const resetDiv = document.createElement('div')
resetDiv.className = 'reset-button-div'

const resetButton = document.createElement('button')
resetButton.textContent = 'Click Here to Reset'
resetButton.className = 'reset-button'

insertAfter(resetDiv, container)

resetDiv.appendChild(resetButton)


resetButton.addEventListener('click', () => {
    gridItems.forEach(block => {
        block.style.backgroundColor = 'white';
    })
})

})()