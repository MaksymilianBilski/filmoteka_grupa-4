// import { page, renderPost, totalPages } from '';
import { Notify } from 'notiflix';
let page = 50;
let totalPages = 100;
let actualPage = 1;

const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const startPageDots = document.querySelector('.start-page-dots');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let paginationButtons = document.querySelectorAll('.pagination-button');

//geometric for whole pagination
startPageDots.style.display = 'flex';
startPageDots.style.height = '40px';
startPageDots.style.alignItems = 'center';
pagination.style.display = 'flex';
pagination.style.height = '40px';
paginationBox.style.display = 'flex';
paginationBox.style.alignItems = 'center';

//arrows styles
arrowLeft.style.visibility = 'hidden';
arrowLeft.style.backgroundColor = 'transparent';
arrowLeft.style.border = 'none';
arrowLeft.style.cursor = 'pointer';
arrowLeft.style.marginRight = '10px';
arrowLeft.style.width = '40px';
arrowLeft.style.height = '40px';

arrowRight.style.marginLeft = '10px';
arrowRight.style.border = 'none';
arrowRight.style.backgroundColor = 'transparent';
arrowRight.style.cursor = 'pointer';
arrowRight.style.width = '40px';
arrowRight.style.height = '40px';

// add arrow functions on click
arrowLeft.addEventListener('click', () => {
  pageBackward();
});
arrowRight.addEventListener('click', () => {
  pageForward();
});

//arrows hover effects
arrowRight.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = '#ff6b08';
  e.target.style.borderRadius = '4px';
});
arrowRight.addEventListener('mouseout', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = 'transparent';
  e.target.style.borderRadius = '0px';
});

arrowLeft.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = '#ff6b08';
  e.target.style.borderRadius = '4px';
});
arrowLeft.addEventListener('mouseout', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = 'transparent';
  e.target.style.borderRadius = '0px';
});

startState();
stylesAndListeners();

// loop for adding styles and event listeners
function stylesAndListeners() {
  for (let i = 0; i <= pagination.children.length - 1; i++) {
    // buttons styling
    pagination.children[i].style.marginLeft = '2px';
    pagination.children[i].style.backgroundColor = 'transparent';
    pagination.children[i].style.border = 'none';
    pagination.children[i].style.cursor = 'pointer';
    pagination.children[i].style.width = '40px';
    pagination.children[i].style.height = '40px';
    // if cursor is on the dots
    if (pagination.children[i].textContent === '...') {
      pagination.children[i].style.cursor = 'default';
      pagination.children[i].style.width = '16px';
      pagination.children[i].style.height = '40px';
      pagination.children[i].style.display = 'flex';
      pagination.children[i].style.alignItems = 'center';
    }
    // hover effects if pagination is in middle state
    if (
      !pagination.children[i].classList.contains('end-dots') &&
      !pagination.children[i].classList.contains('begining-dots')
    ) {
      pagination.children[i].addEventListener('mouseover', e => {
        e.target.style.transition = 'all 250ms';
        e.target.style.backgroundColor = '#ff6b08';
        e.target.style.borderRadius = '4px';
      });
      pagination.children[i].addEventListener('mouseout', e => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.borderRadius = '0px';
      });
    }
    //end dots styling
    if (pagination.children[i].classList.contains('end-dots')) {
      pagination.children[i].style.marginLeft = '4px';
      pagination.children[i].style.marginRight = '4px';
      pagination.children[i].style.border = 'none';
    }
    //click events on buttons
    pagination.children[i].addEventListener('click', buttonClick);
    startPageDots.addEventListener('click', buttonClick);
  }
}
//creating the start state in pagination
function startState() {
  //dots before last page + last page
  pagination.insertAdjacentHTML(
    'beforeend',
    `<span class="end-dots">...</span>`
  );
  pagination.insertAdjacentHTML('beforeend', `<button>${totalPages}</button>`);
  //creating frist 5 pages
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
    );
  }
}

//moving all pages forward
function pageForward() {
  // set the page and actualPage for last page
  actualPage = page = totalPages;
  pagination.innerHTML = '';
  startPageDots.innerHTML = '';
  // creating the last 5 pages
  for (let i = totalPages - 4; i <= totalPages; i++) {
    pagination.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination-button">${i}</button>`
    );
  }
  //hide and show arrow
  arrowRight.style.transition = 'all 250ms';
  arrowRight.style.visibility = 'hidden';
  arrowLeft.style.transition = 'all 250ms';
  arrowLeft.style.visibility = 'visible';
  //insert first page and dots after it
  pagination.insertAdjacentHTML(
    'afterbegin',
    `<span class="begining-dots" style="cursor: default;">...</span>`
  );
  pagination.insertAdjacentHTML(
    'afterbegin',
    `<button class="pagination-button">${1}</button>`
  );
  stylesAndListeners();
}

//moving all pages backward
function pageBackward() {
  // setting page and actual page to 1
  actualPage = page = 1;
  pagination.innerHTML = '';
  startPageDots.innerHTML = '';
  // creating the first 5 elements
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  // hide and show arrow
  arrowRight.style.transition = 'all 250ms';
  arrowRight.style.visibility = 'visible';
  arrowLeft.style.transition = 'all 250ms';
  arrowLeft.style.visibility = 'hidden';

  //insert dots at the end, and amount of total pages after it
  pagination.insertAdjacentHTML(
    'beforeend',
    `<span class="end-dots">...</span>`
  );
  pagination.insertAdjacentHTML(
    'beforeend',
    `<button class="pagination-button" style="background-color: transparent; border: none;">${totalPages}</button>`
  );
  stylesAndListeners();
}

function buttonClick(e) {
  // if clicked on dots
  if (e.target.nodeName === 'SPAN') {
    return;
  }
  //setting page number to clicked button
  page = actualPage = e.target.textContent;
  pagination.innerHTML = '';
  startPageDots.innerHTML = '';
  // condition for dynamic creating pages in middle state
  if (actualPage >= 4 && actualPage <= totalPages - 4) {
    arrowLeft.style.visibility = 'visible';
    arrowRight.style.visibility = 'visible';
    // dots and first page at the begining if the actual page is bigger than 4
    startPageDots.innerHTML = `<span class="begining-dots" style="cursor: default;">...</span>`;
    startPageDots.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="cursor: pointer; height: 40px; width: 40px;">${1}</button>`
    );
    // //dots and last page if actual page is not higher than total pages-4
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${totalPages}</button>`
    );
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<span class="end-dots">...</span>`
    );
  }
  // hide begining dots
  if (actualPage <= 4) {
    startPageDots.innerHTML = '';
  }
  // hide left arrow
  if (actualPage <= 3) {
    arrowLeft.style.transition = 'all 250ms';
    arrowLeft.style.visibility = 'hidden';
  }
  //hide right arrow
  if (actualPage >= totalPages - 3) {
    arrowRight.style.transition = 'all 250ms';
    arrowRight.style.visibility = 'hidden';
  }
  //loop for dynamic creating first 5 pages, and last 5 pages
  for (let i = Number(actualPage) + 2; i >= Number(actualPage) - 2; i--) {
    // first 3 pages condition
    if (Number(actualPage) <= 3) {
      pageBackward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    // last 5 pages condition
    if (Number(actualPage) >= totalPages - 3) {
      pageForward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
    // styles for first page and begining dots
    if (startPageDots.children.length >= 1) {
      startPageDots.children[0].style.backgroundColor = 'transparent';
      startPageDots.children[0].style.border = 'none';
      startPageDots.children[0].addEventListener('mouseover', e => {
        e.target.style.transition = 'all 250ms';
        e.target.style.backgroundColor = '#ff6b08';
        e.target.style.borderRadius = '4px';
      });
      startPageDots.children[0].addEventListener('mouseout', e => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.borderRadius = '0px';
      });
      startPageDots.children[1].style.marginLeft = '4px';
      startPageDots.children[1].style.marginRight = '4px';
      startPageDots.children[1].style.border = 'none';
      startPageDots.children[1].style.backgroundColor = 'transparent';
    }
  }
}

function changeBtn(e) {
  // if didnt clicked properly
  if (e.target.nodeName === 'DIV') {
    return;
  }
  // } //if there are some buttons(and should be), do a loop to add event listeners and styles
  else if (pagination.children.length > 0) {
    stylesAndListeners();
  } else return;
}

pagination.addEventListener('click', changeBtn);

//testing functions
function testBtn() {
  paginationBox.insertAdjacentHTML(
    'afterbegin',
    `<button class="test" style="color: red; background-color: yellow; cursor: pointer; border: 2px solid grey;">PAGE-INFO</button>`
  );
}
testBtn();
const tBtn = document.querySelector('.test');
tBtn.addEventListener('click', () => {
  let currentPage = actualPage;
  let pageExport = page;
  Notify.info('current page = ' + `${currentPage}`);
  Notify.info('page to export = ' + `${pageExport}`);
});
// export { page };
