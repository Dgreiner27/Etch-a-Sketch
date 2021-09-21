const defaultSize = 16;
let currentSize = defaultSize;

const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');




function gridResizer(squares) {
    let containerHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--containerHeight');
    let newSquareSize = (parseInt(containerHeight) /*-2*squares*/)/squares;
    document.documentElement.style.setProperty('--gridBoxHeight', `${newSquareSize}px`);
    return newSquareSize;
}



function clearGrid() {
        const gridItems = document.querySelectorAll('#container > div');
        gridItems.forEach((item) => {
            item.classList.remove('gridBoxMousedOver');
        });
        container.innerHTML= '';
    }

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
    document.documentElement.style.setProperty('--numberOfBoxes', currentSize);
    console.log(typeof(currentSize));
    if (currentSize == null || currentSize == undefined){
        currentSize =defaultSize;
        gridResizer(currentSize);
        createGrid(currentSize);
        console.log('oops');
    } else if (currentSize <= 100 && currentSize >= 4) {
        gridResizer(currentSize);
        createGrid(currentSize);
    } else console.log('outside of range');
    
    
});   

createGrid(currentSize);