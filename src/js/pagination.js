// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
let page = 50;
let totalPages = 100;
let actualPage = 1;

const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
paginationBox.style.display = 'flex';
startState();

const paginationButtons = document.querySelectorAll('.pagination-button');

arrowLeft.addEventListener('click', () => {
  pageBackward();
});
arrowRight.addEventListener('click', () => {
  pageForward();
});

function startState() {
  //dots before last page + last page
  pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
  pagination.insertAdjacentHTML('beforeend', `<button>${totalPages}</button>`);
  //creating 1-5 pages
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
    );
  }
}

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
      }
      // set the actualPage to middle element of 5 buttons
      actualPage = pagination.children[2];
    }
  }
}

function pageForward() {
  // set the page and actualPage for last page
  actualPage = page = totalPages;
  pagination.innerHTML = '';
  // creating the last 5 pages
  for (let i = totalPages; i >= totalPages - 4; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  //hide and show arrow
  arrowLeft.classList.remove('hidden');
  arrowRight.classList.add('hidden');
  // paginationButtons = document.querySelectorAll('.pagination-button');
  //insert first page and dots after it
  pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
  pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);

  // renderPost();
}

function pageBackward() {
  // setting page and actual page to 1
  actualPage = page = 1;
  pagination.innerHTML = '';
  // creating the first 5 elements
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  // hide and show arrow
  arrowRight.classList.remove('hidden');
  arrowLeft.classList.add('hidden');
  //insert dots at the end, and amount of total pages after it
  pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
  pagination.insertAdjacentHTML(
    'beforeend',
    `<button class="pagination-button">${totalPages}</button>`
  );
  // renderPost();
}

function buttonClick(e) {
  //setting page number to clicked button
  console.log(e.target);
  page = actualPage = e.target.textContent;
  pagination.innerHTML = '';
  // dynamic creating of pages in middle state
  if (Number(actualPage) >= 5 && Number(actualPage) <= totalPages - 4) {
    // !!TO DO!! create dots and first element at the begining !!!!
    pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
    pagination.insertAdjacentHTML(
      'beforeend',
      `<button class="pagination-button">${totalPages}</button>`
    );
  }
  // dynamic creating first 5 pages, and last 5 pages
  for (let i = Number(actualPage) + 2; i >= Number(actualPage) - 2; i--) {
    // first 5 pages condition
    if (Number(actualPage) <= 3) {
      pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
      pagination.insertAdjacentHTML(
        'beforeend',
        `<button class="pagination-button">${totalPages}</button>`
      );
      pageBackward();
      return (page = actualPage = e.currentTarget.textContent);
    }
    // last 5 pages condition
    if (Number(actualPage) >= totalPages - 2) {
      arrowLeft.classList.remove('hidden');
      pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
      pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);
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
  } //if there are some buttons do a loop on this buttons
  else if (pagination.children.length > 0) {
    for (let i = 0; i <= pagination.children.length - 1; i++) {
      // !!TO DO!!
      pagination.children[i].addEventListener('click', buttonClick);
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
  console.log(paginationButtons);
});

// export { page };
