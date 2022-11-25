import { Notify } from 'notiflix';
import * as module from './fetch-to-main';

let page;
let actualPage = 1;

//values that will have setted amount further in functions
let endPageDots;
let lastPage;
let beginingDots;
let getMovie = document.getElementById(`movie-list`);
const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const startPageDots = document.querySelector('.start-page-dots');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const svgR = document.querySelector('.svg-right');
const svgL = document.querySelector('.svg-left');

//pagination mobile view
function changePaginationView() {
  if (window.innerWidth <= 767) {
    startPageDots.style.display = 'none';
    lastPage.style.display = 'none';
    endPageDots.style.display = 'none';
    if (beginingDots !== undefined) {
      beginingDots.style.display = 'none';
    }
    //hide first page if actualPage is more than 4
    if (actualPage >= 4) {
      if (pagination.children[0] === undefined) {
        return;
      }
      if (pagination.children[0].textContent === '1') {
        pagination.children[0].style.display = 'none';
      }
    }
    //hide last page  until the lastpage-1 is visible
    if (actualPage <= module.totalPages - 4) {
      if (
        Number(
          pagination.children[pagination.children.length - 1].textContent
        ) === module.totalPages
      ) {
        pagination.children[pagination.children.length - 1].style.display =
          'none';
      }
    }
  }
  if (window.innerWidth > 767) {
    startPageDots.style.display = 'flex';
    lastPage.style.display = 'block';
    endPageDots.style.display = 'flex';
    if (beginingDots !== undefined) {
      beginingDots.style.display = 'flex';
    }
  }
}
// change the pagination view
document.addEventListener('load', changePaginationView);
window.addEventListener('resize', changePaginationView);

//maintain the scroll position after page reload
window.addEventListener('scroll', handleScroll);

function handleScroll(evt) {
  if (evt.path === undefined) {
    return;
  }
  const scrollPos = evt.path[1].pageYOffset;
  window.sessionStorage.setItem('SCROLLPOS', scrollPos);
}

window.addEventListener('DOMContentLoaded', () => {
  const y = sessionStorage.getItem('SCROLLPOS') || 0;
  //if timeDifference has original value
  if (module.timeDifference >= 1000) {
    setTimeout(() => {
      window.scroll({ top: y, x: 0 });
    }, module.timeDifference / 10);
  }
  //if timeDifference has proper value
  if (module.timeDifference < 1000) {
    setTimeout(() => {
      window.scroll({ top: y, x: 0 });
    }, module.timeDifference);
  }
});

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

arrowRight.style.marginLeft = '10px';
arrowRight.style.border = 'none';
arrowRight.style.backgroundColor = 'transparent';

//arrows hover effects
svgL.addEventListener('mouseout', e => {
  e.target.style.transition = 'all 150ms';
  e.target.style.fill = 'black';
});
svgL.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 150ms';
  e.target.style.fill = '#ff6b08';
  e.target.style.cursor = 'pointer';
});
svgR.addEventListener('mouseout', e => {
  e.target.style.transition = 'all 150ms';
  e.target.style.fill = 'black';
});
svgR.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 150ms';
  e.target.style.fill = '#ff6b08';
  e.target.style.cursor = 'pointer';
});

// add arrow functions on click
svgL.addEventListener('click', () => {
  pageBackward();
});
svgR.addEventListener('click', () => {
  pageForward();
});

// making start state of pagination after the timeDifference
const makeStartPagination = () => {
  if (module.timeDifference >= 1000) {
    return setTimeout(() => {
      startState();
      stylesAndListeners();
    }, module.timeDifference / 10);
  }
  if (module.timeDifference < 1000) {
    return setTimeout(() => {
      startState();
      stylesAndListeners();
    }, module.timeDifference);
  }
};
makeStartPagination();

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
      changePaginationView();
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
  pagination.insertAdjacentHTML(
    'beforeend',
    `<button class="last-page">${module.totalPages}</button>`
  );
  lastPage = document.querySelector('.last-page');
  //creating frist 5 pages
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
    );
  }
  lastPage = document.querySelector('.last-page');
  endPageDots = document.querySelector('.end-dots');
}

//moving all pages forward
function pageForward() {
  // set the page and actualPage for last page
  actualPage = page = module.totalPages;
  pagination.innerHTML = '';
  startPageDots.innerHTML = '';
  // creating the last 5 pages
  for (let i = module.totalPages - 4; i <= module.totalPages; i++) {
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
    `<span class="begining-dots" style="cursor: default; margin: none;height: 100%; width: 16px; display: flex; align-items:center;justify-content: center; margin: 0;">...</span>`
  );
  pagination.insertAdjacentHTML(
    'afterbegin',
    `<button class="pagination-button">${1}</button>`
  );
  beginingDots = document.querySelector('.begining-dots');
  stylesAndListeners();
  changePaginationView();
}

//moving all pages backward
async function pageBackward() {
  // setting page and actual page to 1
  page = actualPage = 1;
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
    `<button class="pagination-button last-page"  style="background-color: transparent; border: none;">${module.totalPages}</button>`
  );
  stylesAndListeners();
  endPageDots = document.querySelector('.end-dots');
  lastPage = document.querySelector('.last-page');
  changePaginationView();
}

function buttonClick(e) {
  // if clicked on dots
  if (e.target.classList.contains('begining-dots')) {
    Notify.info(`${actualPage - 1}` + ' pages backward');
  }
  if (e.target.nodeName === 'SPAN') {
    return;
  }

  //setting page number to clicked button

  page = actualPage = e.target.textContent;
  pagination.innerHTML = '';
  startPageDots.innerHTML = '';
  // condition for dynamic creating pages in middle state
  if (actualPage >= 4 && actualPage <= module.totalPages - 4) {
    arrowLeft.style.visibility = 'visible';
    arrowRight.style.visibility = 'visible';
    // dots and first page at the begining if the actual page is bigger than 4
    startPageDots.innerHTML = `<span class="begining-dots" style="cursor: default; margin: none;height: 100%; width: 16px; display: flex; align-items:center;justify-content: center; margin: 0;">...</span>`;
    startPageDots.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="cursor: pointer; height: 40px; width: 40px;">${1}</button>`
    );
    // //dots and last page if actual page is not higher than total pages-4
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${module.totalPages}</button>`
    );
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<span class="end-dots">...</span>`
    );
    endPageDots = document.querySelector('.end-dots');
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
  if (actualPage >= module.totalPages - 3) {
    arrowRight.style.transition = 'all 250ms';
    arrowRight.style.visibility = 'hidden';
    changePaginationView();
  }
  //loop for dynamic creating first 5 pages, and last 5 pages
  for (let i = Number(actualPage) + 2; i >= Number(actualPage) - 2; i--) {
    // first 3 pages condition
    if (Number(actualPage) <= 3) {
      pageBackward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    // last 5 pages condition
    if (Number(actualPage) >= module.totalPages - 3) {
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
  if (
    e.target.nodeName === 'SPAN' &&
    !e.target.classList.contains('begining-dots')
  ) {
    return Notify.info(`${module.totalPages - actualPage}` + ' pages left');
  }
  if (e.target.nodeName === 'SPAN') {
    return;
  }
  // } //if there are some buttons, do a loop and add event listeners + styles
  else if (pagination.children.length > 0) {
    getMovie.innerHTML = '';
    module.fetchMovies(module.API_KEY + `&page=${page}`);
    stylesAndListeners();
    //after page change set the scroll position to the bottom of the page
    const posY = sessionStorage.getItem('SCROLLPOS');
    if (module.timeDifference >= 1000) {
      setTimeout(() => {
        window.scroll({ top: posY, x: 0, behavior: 'smooth' });
      }, module.timeDifference / 10);
    }
    if (module.timeDifference < 1000) {
      setTimeout(() => {
        window.scroll({ top: posY, x: 0, behavior: 'smooth' });
      }, module.timeDifference * 10);
    }
  }
}

pagination.addEventListener('click', changeBtn);

// //testing functions
// function testBtn() {
//   paginationBox.insertAdjacentHTML(
//     'afterbegin',
//     `<button class="test" style="color: red; background-color: yellow; cursor: pointer; border: 2px solid grey;">PAGE-INFO</button>`
//   );
// }
// testBtn();
// const tBtn = document.querySelector('.test');
// tBtn.addEventListener('click', () => {
//   Notify.info('current page = ' + `${actualPage}`);
//   Notify.info('total pages = ' + `${module.totalPages}`);
//   Notify.info('time difference = ' + `${module.timeDifference}`);
//   Notify.info('window width = ' + `${window.innerWidth}`);
//   console.log(sessionStorage.getItem('SCROLLPOS'));
// });
