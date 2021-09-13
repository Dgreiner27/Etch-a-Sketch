








const container = document.querySelector('#container');
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('gridBox');
        
        container.appendChild(div);
    }
}

