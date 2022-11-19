// import { page, renderPost, totalPages } from '';
// import { Notify } from 'notiflix';
let page = 90;
let totalPages = 100;
let actualPage;

const pagination = document.querySelector('.pagination');
const paginationBox = document.querySelector('.pagination-box');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
let paginationButtons;
paginationBox.style.display = 'flex';

arrowLeft.addEventListener('click', () => {
  pageBackward();
});
arrowRight.addEventListener('click', () => {
  pageForward();
});

function startState() {
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
    );
  }
}

startState();

//bez promise nie działa listener w funkcji changeBtn
function middleState() {
  for (let i = 0; i <= totalPages; i++) {
    if (page > 5 && page < totalPages - 4) {
      for (let i = page + 2; i >= page - 2; i--) {
        pagination.insertAdjacentHTML(
          'afterbegin',
          `<button class="pagination-button" style="margin-left:2px;">${i}</button>`
        );
      }
      actualPage = pagination.children[2];
      return pagination;
    }
  }
}

// function middleState() {
//   // pagination.insertAdjacentHTML('beforebegin', `<button>${1}</button>`);
//   // pagination.insertAdjacentHTML('beforebegin', `<span>...</span>`);
//   // pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
//   // pagination.insertAdjacentHTML('beforeend', `<button>${totalPages}</button>`);

//     // if (page >= totalPages - 4) {
//     //   const paginationBtn = document.querySelector('.pagination-button');
//     //   paginationBtn.insertAdjacentHTML('afterbegin', '...');
//     // }
//   }

function pageForward() {
  page = totalPages;
  pagination.innerHTML = '';
  for (let i = totalPages; i >= totalPages - 4; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  arrowLeft.classList.remove('hidden');
  arrowRight.classList.add('hidden');
  paginationButtons = document.querySelectorAll('.pagination-button');
  pagination.insertAdjacentHTML('afterbegin', `<span>...</span>`);
  pagination.insertAdjacentHTML('afterbegin', `<button>${1}</button>`);

  // renderPost();
}

function pageBackward() {
  page = 1;
  pagination.innerHTML = '';
  for (let i = 5; i >= 1; i--) {
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
  arrowRight.classList.remove('hidden');
  arrowLeft.classList.add('hidden');
  paginationButtons = document.querySelectorAll('.pagination-button');
  pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
  pagination.insertAdjacentHTML('beforeend', `<button>${totalPages}</button>`);
  // renderPost();
}

function buttonClick(e) {
  page = actualPage = e.currentTarget.textContent;
  pagination.innerHTML = '';
  if (Number(actualPage) >= 5 && Number(actualPage) <= totalPages - 2) {
    pagination.insertAdjacentHTML('beforeend', `<span>...</span>`);
    pagination.insertAdjacentHTML(
      'beforeend',
      `<button>${totalPages}</button>`
    );
  }
  for (let i = Number(actualPage) + 2; i >= Number(actualPage) - 2; i--) {
    if (Number(actualPage) <= 3) {
      return pageBackward();
    }
    if (Number(actualPage) >= totalPages - 2) {
      return pageForward();
    }
    pagination.insertAdjacentHTML(
      'afterbegin',
      `<button class="pagination-button">${i}</button>`
    );
  }
}

function changeBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else if (pagination.children.length > 0) {
    for (let i = 0; i <= pagination.children.length - 1; i++) {
      pagination.children[i].addEventListener('click', buttonClick);
    }
  } else return;
}

pagination.addEventListener('click', changeBtn);

// export { page };
