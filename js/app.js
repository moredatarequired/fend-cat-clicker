const catClicks = {
    'Ali': 0,
    'Galadriel': 0,
    'Jabba': 0,
    'Kramer': 0,
    'Pennyworth': 0
};

function catImageLocation(catName) {
    return 'img/' + catName.toLowerCase() + '.jpg';
}

function catFigure(cat) {
    let fig = document.createElement('figure');

    let img = document.createElement('img');
    img.src = catImageLocation(cat);
    fig.appendChild(img);

    let caption = document.createElement('figcaption');
    caption.innerHTML = cat;
    fig.appendChild(caption);

    return fig;
}

function catListItem(cat) {
    let li = document.createElement('li');
    let fig = catFigure(cat);
    fig.classList.add('sidebar-cat');
    li.appendChild(fig);
    return li;
}

function setupSidebar(cats) {
    let fragment = document.createDocumentFragment();
    for (const cat in cats) {
        fragment.appendChild(catListItem(cat));
    }
    document.querySelector('.cats').appendChild(fragment);
}

setupSidebar(catClicks);

let activeCat = null;
function selectActive(catName) {
    if (catName === activeCat) {
        return;
    }
    activeCat = catName;
    let area = document.querySelector('.play-area');
    let newCat = catFigure(catName);
    newCat.classList.add('.main-cat');
    area.replaceChild(newCat, area.firstChild);
}

function sidebarClick(e) {
    const catName = e.target.parentElement.querySelector('figcaption').innerHTML;
    selectActive(catName);
}
document.querySelector('.cat-selector').addEventListener('click', sidebarClick);

function catClick(e) {
    let parent = e.target.parentElement.parentElement;
    let clickDisplay = parent.querySelector('.click-count');
    clickDisplay.innerHTML = +clickDisplay.innerHTML + 1;
}