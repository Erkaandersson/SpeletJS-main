const cards = document.querySelector('.cards')
function revealImg (inputId){
    
 let child = inputId.children[1];

    if(child.style.display === 'none'){
        child.style.display = 'flex'
    }
    else {
        child.style.display = 'none'
    }    
}

cards.addEventListener('click', (e) => {
    revealImg(e.target)   
})

NiceSelect.bind(document.getElementById('a-select'));




