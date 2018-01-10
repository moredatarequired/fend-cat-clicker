let clickDisplay = document.querySelector('.click-count');
let clicks = 0;

let catButton = document.querySelector('.cat');

function catClick() {
    clicks++;
    clickDisplay.innerHTML = clicks;
}

catButton.addEventListener('click', catClick);