
let catButtons = document.querySelectorAll('.cat');

function catClick(e) {
    let parent = e.target.parentElement.parentElement;
    let clickDisplay = parent.querySelector('.click-count');
    clickDisplay.innerHTML = +clickDisplay.innerHTML + 1;
}

catButtons.forEach(b => b.addEventListener('click', catClick));