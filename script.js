








const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');

for (i = 0; i < 256; i++) {
    
        const div = document.createElement('div');
        div.classList.add('gridBox');
        container.appendChild(div);
        console.log(div);
        div.addEventListener("mouseover", () => {
            div.classList.add('gridBoxMousedOver');    
        });

        
        clearButton.addEventListener("click", () => {
            div.classList.remove('gridBoxMousedOver');

        });
    
}

