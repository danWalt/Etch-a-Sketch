const container = document.getElementById("container");


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let index = 0; index < rows*cols; index++) {
        let cell = document.createElement('div')
        cell.innerText = ''
        container.appendChild(cell).className = "grid-item";      
    }
}



function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



makeRows(16, 16)