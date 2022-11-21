// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
let page = 50;
let totalPages = 100;
let actualPage = 1;

const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const dots = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let paginationButtons = document.querySelectorAll('.pagination-button');

pagination.style.display = 'flex';
paginationBox.style.display = 'flex';

arrowLeft.addEventListener('click', () => {
  pageBackward();
});
arrowRight.addEventListener('click', () => {
  pageForward();
});

arrowRight.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = '#ff6b08';
  e.target.style.borderRadius = '4px';
});
arrowRight.addEventListener('mouseout', e => {
  e.target.style.backgroundColor = '#e5e5e5';
  e.target.style.borderRadius = '0px';
});

arrowLeft.addEventListener('mouseover', e => {
  e.target.style.transition = 'all 250ms';
  e.target.style.backgroundColor = '#ff6b08';
  e.target.style.borderRadius = '4px';
});
arrowLeft.addEventListener('mouseout', e => {
  e.target.style.backgroundColor = '#e5e5e5';
  e.target.style.borderRadius = '0px';
});

startState();

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

//creating the middle state of pagination
function middleState() {
  //loop by the value of total amount of pages.
  for (let i = 0; i <= totalPages; i++) {
    // condition for pages between: page 5 and page last-4
    if (actualPage > 5 && page < totalPages - 4) {
      // loop that makes pages in middle state( firstPage... thisLoopPages ...lastPage)
      for (let i = actualPage + 2; i >= actualPage - 2; i--) {
        pagination.insertAdjacentHTML(
          'afterbegin',
          `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
        );
        if (actualPage > 5) {
          console.log('cos');
          pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
          pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);
        }
      }
      // set the actualPage to middle element of 5 buttons
      actualPage = pagination.children[2];
    }
  }
}

//moving all pages forward
function pageForward() {
  // set the page and actualPage for last page
  actualPage = page = totalPages;
  pagination.innerHTML = '';
  dots.innerHTML = '';
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
  arrowLeft.style.visibility = 'visible';
  arrowLeft.style.transition = 'all 250ms';
  // // arrowRight.classList.add('hidden');
  // arrowLeft.classList.remove('hidden');
  //insert first page and dots after it
  pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
  pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);

  // renderPost();
}

//moving all pages backward
function pageBackward() {
  // setting page and actual page to 1
  actualPage = page = 1;
  pagination.innerHTML = '';
  dots.innerHTML = '';
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
  arrowLeft.style.visibility = 'hidden';
  arrowLeft.style.transition = 'all 250ms';
  // arrowLeft.classList.add('hidden');
  // arrowRight.classList.remove('hidden');
  //insert dots at the end, and amount of total pages after it
  pagination.insertAdjacentHTML(
    'beforeend',
    `<span class="end-dots">...</span>`
  );
  pagination.insertAdjacentHTML(
    'beforeend',
    `<button class="pagination-button">${totalPages}</button>`
  );
  // renderPost();
}

function buttonClick(e) {
  //setting page number to clicked button
  page = actualPage = e.target.textContent;
  pagination.innerHTML = '';
  dots.innerHTML = '';
  // dynamic creating of pages in middle state
  if (actualPage >= 4 && actualPage <= totalPages - 4) {
    // dots and first page at the begining if the actual page is bigger than 4
    dots.innerHTML = `<span>...</span>`;
    dots.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${1}</button>`
    );
    // //dots and last page
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${totalPages}</button>`
    );
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<span class="end-dots">...</span>`
    );
  }
  if (actualPage <= 4) {
    dots.innerHTML = '';
  }
  if (actualPage <= 3) {
    arrowLeft.style.transition = 'all 250ms';
    arrowLeft.style.visibility = 'hidden';
  }
  if (actualPage >= totalPages - 3) {
    arrowRight.style.transition = 'all 250ms';
    arrowRight.style.visibility = 'hidden';
  }
  // dynamic creating first 5 pages, and last 5 pages
  for (let i = Number(actualPage) + 2; i >= Number(actualPage) - 2; i--) {
    // first 5 pages condition + dots beforeend and last page
    if (Number(actualPage) <= 3) {
      pagination.insertAdjacentHTML(
        'beforeend',
        `<span class="end-dots">...</span>`
      );
      pagination.insertAdjacentHTML(
        'beforeend',
        `<button class="pagination-button">${totalPages}</button>`
      );
      pageBackward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    // last 5 pages condition
    if (Number(actualPage) >= totalPages - 3) {
      pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
      pagination.insertAdjacentHTML(
        'afterbegin',
        `<button class="pagination-button">${1}</button>`
      );
      pageForward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
}

function changeBtn(e) {
  // if didnt clicked properly
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } //if there are some buttons, do a loop on this buttons and add eventlistener to it
  else if (pagination.children.length > 0) {
    for (let i = 0; i <= pagination.children.length - 1; i++) {
      // buttons styling
      pagination.children[i].style.marginLeft = '2px';
      pagination.children[i].style.backgroundColor = '#e5e5e5';
      pagination.children[i].style.border = '1px solid transparent';
      // hover effects
      if (!pagination.children[i].classList.contains('end-dots')) {
        pagination.children[i].addEventListener('mouseover', e => {
          e.target.style.transition = 'all 250ms';
          e.target.style.backgroundColor = '#ff6b08';
          e.target.style.borderRadius = '4px';
        });
        pagination.children[i].addEventListener('mouseout', e => {
          e.target.style.backgroundColor = '#e5e5e5';
          e.target.style.borderRadius = '0px';
        });
      }
      //end dots styling
      if (pagination.children[i].classList.contains('end-dots')) {
        pagination.children[i].style.marginLeft = '4px';
        pagination.children[i].style.marginRight = '4px';
        pagination.children[i].style.border = '1px solid transparent';
      }
      //click events on buttons
      pagination.children[i].addEventListener('click', buttonClick);
      dots.addEventListener('click', buttonClick);
    }
  } else return;
}

pagination.addEventListener('click', changeBtn);

//testing functions
function testBtn() {
  paginationBox.insertAdjacentHTML(
    'afterbegin',
    `<button class="test">klik</button>`
  );
}
testBtn();
const tBtn = document.querySelector('.test');
tBtn.addEventListener('click', () => {
  console.log(actualPage);
});
// export { page };
