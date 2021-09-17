const defaultSize = 16;
let currentSize = defaultSize;



function gridResizer(squares) {
    let containerHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--containerHeight');
    let newSquareSize = (parseInt(containerHeight)-2*squares)/squares;
    document.documentElement.style.setProperty('--gridBoxHeight', `${newSquareSize}px`);
    return newSquareSize;
}



function clearGrid() {
        const gridItems = document.querySelectorAll('#container > div');
        gridItems.forEach((item) => {
            item.classList.remove('gridBoxMousedOver');
        });
    }


const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');


function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.classList.add('gridBoxMousedOver');    
        });
        
    }
}

clearButton.addEventListener("click", () => {
    clearGrid();
    currentSize = prompt('Size?');
    gridResizer(currentSize);
    createGrid(currentSize);
});   

createGrid(currentSize);

/* Can I just change const div to var?
Will that push its scope outsode of the function? */